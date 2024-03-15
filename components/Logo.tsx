import React from "react"
import Image from "next/image"

export const Logo = () => {
  return (
    <div>
      <Image src={"/logo.svg"} width={100} height={100} alt="Klick" />
    </div>
  )
}
