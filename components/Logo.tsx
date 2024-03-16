import React from "react"
import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image src={"/logo.svg"} width={100} height={100} alt="Klick" />
      </Link>
    </div>
  )
}
