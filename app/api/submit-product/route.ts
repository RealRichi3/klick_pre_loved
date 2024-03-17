import { GoogleSpreadsheet } from "google-spreadsheet"
import { NextResponse } from "next/server"
import { JWT } from "google-auth-library"

export async function POST(req: Request) {
  const sheet_id = process.env.GOOGLE_SHEET_ID as string
  const apiKey = process.env.GOOGLE_PRIVATE_KEY as string
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string
  const requiredFields = [
    "category",
    "name",
    "brand",
    "product_age_group",
    "original_price",
    "selling_price",
    "condition",
    "year_of_purchase",
    "front_side_image",
    "back_side_image",
    "right_side_image",
    "left_side_image",
    "product_video",
    "seller_first_name",
    "seller_last_name",
    "seller_email",
    "seller_phone_number",
    "seller_address",
    "seller_city",
    "seller_state",
  ]
  let statusCode: null | number = null
  try {
    const body = await req.json()
    const missingFields = requiredFields.filter(
      (field) => !Object.keys(body).includes(field)
    )
    const emptyFields = requiredFields.filter(
      (field) => !body[field] || /^\s*$/.test(body[field])
    )
    if (missingFields.length > 0 || emptyFields.length > 0) {
      statusCode = 400
      throw new Error(
        `The following fields are missing: ${missingFields.join(", ")}`
      )
    }
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: apiKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth)
    await doc.loadInfo()
    const title = doc.title

    return NextResponse.json({ message: "A ok!", title })
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: statusCode || 500 }
    )
  }
}
