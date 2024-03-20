"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer>
      <div className="w-[90%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%] py-[3rem] md:text-md text-sm">
        <div className="flex justify-between md:flex-row flex-col gap-10">
          <div>
            <Logo />
            <p className="mt-7 md:w-[60%] text-[#6A6B6C]">
              Klick - An Ezcart company. Shop from top level sellers, shops, and
              stores in Nigeria
            </p>
          </div>
          <div className="flex md:gap-7 lg:gap-[5.5rem] gap-3  md:flex-row flex-col gap-3">
            <div>
              <p className="text-lg mb-2">Company</p>
              <ul className="text-[#6A6B6C]">
                <li className="mb-2">
                  <Link href={"#why-sell-with-us"}>Why Sell with Us</Link>
                </li>
                <li>
                  <Link href={"#how-to-sell"}>How to Sell</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-lg mb-2">FAQs</p>
              <ul className="text-[#6A6B6C]">
                <li className="mb-2">
                  <Link href={"#sellers-guidelines"}>
                    Photography Guideline
                  </Link>
                </li>
                <li>
                  <Link href={"#sellers-guidelines"}>
                    Pricing & Payment Guideline
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-lg mb-2">Contact</p>
              <ul className="text-[#6A6B6C]">
                <li className="mb-2">
                  <Link href={"#klick"}>FAQs</Link>
                </li>
                <li>
                  <Link href={"#klick"}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center mt-10 text-[#6A6B6C]">
          Klick © 2024. All rights reserved
        </p>
      </div>
    </footer>
  )
}
