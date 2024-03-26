"use client"
import { Image } from "antd"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { CustomButton } from "./CustomButton"

export const Hero = () => {
  useGSAP(() => {
    gsap.from(".reveal-down", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power4.out",
      delay: 0.5,
    })
    gsap.from(".reveal", {
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power4.out",
      delay: 0.5,
    })
  }, [])
  return (
    <div className="bg-[#00A3E0]/10 md:min-h-[60vh] md:py-[0rem] py-8 pt-9 mb-5 md:mb-[2rem] relative overflow-hidden z-[10]">
      <div className="w-[93%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%] flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
        <div className="md:w-[50%] overflow-hidden relative z-[10]">
          <h2 className="font-semibold md:text-[48px] lg:text-[70px] text-[24px] lg:leading-[74px] pb-[1rem] md:pb-[2rem] text-secondary md:text-start text-center  overflow-hidden reveal-down">
            When selling is all about saving
          </h2>
          <p className="lg:text-[32px] lg:leading-[38px] md:text-[24px]  md:text-start text-center  overflow-hidden reveal-down mb-5">
            We help you find a new home for all the stuff your kids outgrow.
            Nothing goes to waste, and you get paid too!
          </p>
          <div className="flex md:justify-start justify-center">
            <Link href="#sell-with-us" className="reveal-down">
              <CustomButton>Get Started</CustomButton>
            </Link>
          </div>
        </div>
        <div className="md:w-auto md:h-auto h-[275px] relative reveal-down">
          <Image
            alt="Girl"
            src="/girl.png"
            width={"100%"}
            height={"100%"}
            preview={false}
          />
          <div className="absolute bottom-[20%] left-[-30%] md:block hidden">
            <img src="/butterfly.svg" alt="Hero" />
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] right-[40%] md:block hidden reveal">
        <img src="/butterfly.svg" alt="Hero" />
      </div>
      <div className="absolute top-[14%] left-[8%] md:block hidden reveal">
        <img src="/butterfly.svg" alt="Hero" />
      </div>
      <div className="absolute bottom-[10%] right-[5%] md:block hidden reveal">
        <img src="/butterfly.svg" alt="Hero" />
      </div>
      <div className="absolute bottom-[10%] left-[25%] md:block hidden reveal">
        <img src="/butterfly.svg" alt="Hero" />
      </div>
    </div>
  )
}
