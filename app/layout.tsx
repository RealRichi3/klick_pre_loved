import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Klick",
    description: "Built with Next",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/public/favicon.ico" type="image/x-icon" sizes="1364x1364" />
            </Head>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
