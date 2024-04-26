import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={"/logo.svg"} width={140} height={140} alt="Klick" />
      </Link>
    </div>
  )
}
