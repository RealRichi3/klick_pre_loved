"use client"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HowToSell } from "@/components/HowToSell"
import { SellWithUsForm } from "@/components/SellWithUsForm"
import { SellersGuidelines } from "@/components/SellersGuidelines"
import { WhySell } from "@/components/WhySell"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhySell />
      <HowToSell />
      <SellersGuidelines />
      <SellWithUsForm />
      <Footer />
    </main>
  )
}
