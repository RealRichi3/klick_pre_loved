import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";
import { JWT } from "google-auth-library";
import { v2 as cloudinary } from "cloudinary";
import { requiredFields } from "./requiredFields";
import { uploadBase64 } from "./uploadFile";
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
    console.log("Inisde the post");
    const body: Record<string, string> = await req.json();

    // Validate required fields
    const missingFields = requiredFields.filter(
      (field) => !Object.keys(body).includes(field),
    );
    console.log("misising fieldsyy");
    const emptyFields = requiredFields.filter(
      (field) => !body[field] || /^\s*$/.test(body[field]),
    );
    if (missingFields.length > 0 || emptyFields.length > 0) {
      statusCode = 400;

      console.log(" error missing fields");
      const arr = Array.from(new Set([...missingFields, ...emptyFields]));
      throw new Error(`The following fields are required: '${arr.join(", ")}'`);
    }

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: cloudinary_name,
      api_key: cloudinary_api_key,
      api_secret: cloudinary_api_secret,
    });

    console.log(" cloudinary config");
    // Configure Google Sheets
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: apiKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    console.log("serviceAccountAuth");
    // Upload images to Cloudinary
    const images: Record<string, string> = {
      front_side_image: body.front_side_image,
      back_side_image: body.back_side_image,
      right_side_image: body.right_side_image,
      left_side_image: body.left_side_image,
    };
    for (const key in images) {
      const file = images[key];

      console.log({ file });
      // upload BASE64 URL to Cloudinary.
      const image = await uploadBase64(file, key, cloudinary, "image");
      console.log({ image });
      body[key] = image;
    }

    console.log("Added images to body");
    // Upload video to Cloudinary
    const video = await uploadBase64(
      body.product_video,
      "product_video",
      cloudinary,
      "video",
    );
    body.product_video = video;
    console.log("Upload video to base 64");
    // Add data to Google Sheets
    const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth);
    console.log("Setup google-spreadsheet");
    await doc.loadInfo();
    console.log("Load doc");
    const lastTrackingNumber = await redisClient.get("lastTrackingNumber");
    console.log("Redis clien init");
    const tracking_number = lastTrackingNumber
      ? parseInt(lastTrackingNumber) + 1
      : 300;
    body.tracking_number = tracking_number.toString();
    const sheet_title = doc.title;
    const sheet = doc.sheetsByIndex[0];
    await sheet.setHeaderRow(["tracking_number", ...requiredFields]);
    console.log("Set header");
    const row = await sheet.addRow(body);
    console.log("Add row");
    await redisClient.set("lastTrackingNumber", tracking_number.toString());
    console.log("Save no to redis");
    console.log("Sending email");

    await client.send({
      from: {
        email: "mailtrap@klick.africa",
        name: "Klick Preloved",
      },
      to: [
        {
          email: body.seller_email,
        },
      ],
      template_uuid: "45290ebf-7550-45e1-b266-820424f488fe",
      template_variables: {
        tracking_number: body.tracking_number,
      },
    });

    console.log("Sent email");
    const nextRes = NextResponse.json({
      message:
        "Thank you, you have successfully submitted your product listing for review.",
      sheet_title,
      row: row.toObject(),
    });
    return nextRes;
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "An error occured",
        success: false,
        error: "An error occured. Please try again later.",
      },
      { status: 500 },
    );
  }
}
