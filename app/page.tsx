import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HowToSell } from "@/components/HowToSell"
import { WhySell } from "@/components/WhySell"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhySell />
      <HowToSell />
    </main>
  )
}
