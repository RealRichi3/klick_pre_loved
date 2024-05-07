import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { v2 as cloudinary } from "cloudinary";
import { requiredFields } from "./requiredFields";
import { uploadBase64 } from "./uploadFile";
import nodemailer, { Transport, TransportOptions } from "nodemailer";
import redisClient from "./redis";
const { MailtrapClient } = require("mailtrap");

const TOKEN = process.env.EMAIL_PASS;
const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({ endpoint: ENDPOINT, token: TOKEN });

// Needed Environment variables
const sheet_id = process.env.GOOGLE_SHEET_ID as string; // Create a Google Sheet and get the ID
const apiKey = atob(process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"); // From your Google Service Account
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string; // From your Google Service Account
const cloudinary_name = process.env.CLOUDINARY_NAME as string;
const cloudinary_api_key = process.env.CLOUDINARY_API_KEY as string;
const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET as string;

export async function POST(req: Request) {
    let statusCode: null | number = null;
    try {
        const body: Record<string, string> = await req.json();

        // Validate required fields
        const missingFields = requiredFields.filter(
            (field) => !Object.keys(body).includes(field),
        );
        const emptyFields = requiredFields.filter(
            (field) => !body[field] || /^\s*$/.test(body[field]),
        );
        if (missingFields.length > 0 || emptyFields.length > 0) {
            statusCode = 400;
            const arr = Array.from(new Set([...missingFields, ...emptyFields]));
            throw new Error(`The following fields are required: '${arr.join(", ")}'`);
        }

        // Configure Cloudinary
        cloudinary.config({
            cloud_name: cloudinary_name,
            api_key: cloudinary_api_key,
            api_secret: cloudinary_api_secret,
        });

        // Configure Google Sheets
        const serviceAccountAuth = new JWT({
            email: clientEmail,
            key: apiKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        // Upload images to Cloudinary
        const images: Record<string, string> = {
            front_side_image: body.front_side_image,
            back_side_image: body.back_side_image,
            right_side_image: body.right_side_image,
            left_side_image: body.left_side_image,
        };
        for (const key in images) {
            const file = images[key];

            // upload BASE64 URL to Cloudinary.
            const image = await uploadBase64(file, key, cloudinary, "image");
            body[key] = image;
        }

        // Upload video to Cloudinary
        const video = await uploadBase64(
            body.product_video,
            "product_video",
            cloudinary,
            "video",
        );
        body.product_video = video;

        // Add data to Google Sheets
        const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth);
        await doc.loadInfo();
        const lastTrackingNumber = await redisClient.get('lastTrackingNumber')
        const tracking_number = lastTrackingNumber ? parseInt(lastTrackingNumber) + 1 : 1
        body.tracking_number = tracking_number.toString()
        const sheet_title = doc.title;
        const sheet = doc.sheetsByIndex[0];
        await sheet.setHeaderRow(["tracking_number", ...requiredFields]);
        const row = await sheet.addRow(body);
        await redisClient.set('lastTrackingNumber', tracking_number.toString())

        try {
            console.log("Sending email");

            await client
                .send({
                    from: {
                        email: "mailtrap@klick.africa",
                        name: "Klick Preloved",
                    },
                    to: [
                        {
                            email: body.seller_email,
                        }
                    ],
                    template_uuid: "45290ebf-7550-46e1-b266-820424f488fe",
                    template_variables: {
                        "tracking_number": body.tracking_number
                    }
                })
                .then(console.log, console.error);

            console.log("Sent email");
        } catch (error) {
            console.log({ error });
        }
        const nextRes = NextResponse.json({
            message: "You have successfully submitted your product for review",
            sheet_title,
            row: row.toObject(),
        });
        return nextRes;
    } catch (error: any) {
        return NextResponse.json(
            {
                message: error.message,
                success: false,
                error: error.message,
            },
            { status: statusCode || 500 },
        );
    }
}
