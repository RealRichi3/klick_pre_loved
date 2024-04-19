import { GoogleSpreadsheet } from "google-spreadsheet"
import { NextResponse } from "next/server"
import { JWT } from "google-auth-library"
import { v2 as cloudinary } from "cloudinary"
import { requiredFields } from "./requiredFields"
import { uploadBase64 } from "./uploadFile"

// Needed Environment variables
const sheet_id = process.env.GOOGLE_SHEET_ID as string // Create a Google Sheet and get the ID
const apiKey = (process.env.GOOGLE_PRIVATE_KEY ?? '').split(String.raw`\n`).join('\n') as string // From your Google Service Account
const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string // From your Google Service Account
const cloudinary_name = process.env.CLOUDINARY_NAME as string
const cloudinary_api_key = process.env.CLOUDINARY_API_KEY as string
const cloudinary_api_secret = process.env.CLOUDINARY_API_SECRET as string

export async function POST(req: Request) {
    let statusCode: null | number = null
    try {
        const body: Record<string, string> = await req.json()

        // Validate required fields
        const missingFields = requiredFields.filter(
            (field) => !Object.keys(body).includes(field)
        )
        const emptyFields = requiredFields.filter(
            (field) => !body[field] || /^\s*$/.test(body[field])
        )
        if (missingFields.length > 0 || emptyFields.length > 0) {
            statusCode = 400
            const arr = Array.from(new Set([...missingFields, ...emptyFields]))
            throw new Error(`The following fields are required: '${arr.join(", ")}'`)
        }

        // Configure Cloudinary
        cloudinary.config({
            cloud_name: cloudinary_name,
            api_key: cloudinary_api_key,
            api_secret: cloudinary_api_secret,
        })

        // Configure Google Sheets
        const serviceAccountAuth = new JWT({
            email: clientEmail,
            key: apiKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        // Upload images to Cloudinary
        const images: Record<string, string> = {
            front_side_image: body.front_side_image,
            back_side_image: body.back_side_image,
            right_side_image: body.right_side_image,
            left_side_image: body.left_side_image,
        }
        for (const key in images) {
            const file = images[key]

            // upload BASE64 URL to Cloudinary.
            const image = await uploadBase64(file, key, cloudinary, "image")
            body[key] = image
        }

        // Upload video to Cloudinary
        const video = await uploadBase64(
            body.product_video,
            "product_video",
            cloudinary,
            "video"
        )
        body.product_video = video

        // Add data to Google Sheets

        const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth)
        await doc.loadInfo()
        const sheet_title = doc.title
        const sheet = doc.sheetsByIndex[0]
        await sheet.setHeaderRow(requiredFields)
        const row = await sheet.addRow(body)

        return NextResponse.json({
            message: "Product submitted successfully",
            sheet_title,
            row: row.toObject(),
        })
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message, success: false, error: error.message, errorObject: error },
            { status: statusCode || 500 }
        )
    }
}
