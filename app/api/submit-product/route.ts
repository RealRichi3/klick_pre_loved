import { GoogleSpreadsheet } from "google-spreadsheet"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { JWT } from "google-auth-library"

export async function POST(req: Request) {
  const sheet_id = process.env.GOOGLE_SHEET_ID as string
  const apiKey = process.env.GOOGLE_PRIVATE_KEY as string
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL as string
  try {
    const body = await req.json()
    const serviceAccountAuth = new JWT({
      email: clientEmail,
      key: apiKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const doc = new GoogleSpreadsheet(sheet_id, serviceAccountAuth)
    await doc.loadInfo()
    const title = doc.title

    return NextResponse.json({ message: "A ok!", body })
  } catch (error: any) {
    return NextResponse.json(
      { error: error, sheet_id, clientEmail },
      { status: 500 }
    )
  }
}
