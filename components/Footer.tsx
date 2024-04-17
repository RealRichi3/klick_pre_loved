"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsTwitterX, BsWhatsapp } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer>
      <div className="w-[90%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%] py-[3rem] md:text-md text-sm">
        <div className="flex justify-between md:flex-row flex-col gap-10">
          <div>
            <Logo />
            <p className="mt-3  text-[#6A6B6C]">Klick - An Ezcart company.</p>
          </div>
          <div>
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
                    <Link href={"https://wa.link/vz1nr0"} target="_blank">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-7 text-lg md:text-2xl flex gap-4">
              <Link href={"https://twitter.com/klick_africa"} target="_blank">
                <BsTwitterX />
              </Link>

              <Link href={"https://wa.link/vz1nr0"} target="_blank">
                <BsWhatsapp className="text-[#60D394]" />
              </Link>

              <Link
                href={"https://www.instagram.com/klickafrica/?hl=en"}
                target="_blank"
              >
                <BsInstagram className="text-[#FF3864]" />
              </Link>
              <Link
                href={""}
                // target="_blank"
              >
                <BsFacebook className="text-[#192BC2]" />
              </Link>
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
