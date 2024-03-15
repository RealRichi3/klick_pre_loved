"use client"
import { Image } from "antd"
import React from "react"

export const Hero = () => {
  return (
    <div className="bg-[#00A3E0]/10 min-h-[60vh] md:py-[0rem] pt-9 mb-5 md:mb-[2rem] relative">
      <div className="w-[95%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%] flex md:flex-row flex-col-reverse gap-4 justify-between items-center">
        <div className="md:w-[50%]">
          <h2 className="font-semibold md:text-[48px] lg:text-[70px] text-[30px] lg:leading-[70px] text-secondary md:text-start text-center">
            When selling is all about saving
          </h2>
          <p className="lg:text-[32px] lg:leading-[38px] md:text-[24px] mt-[1rem] md:mt-[2rem] md:text-start text-center">
            We help you find a new home for all the stuff your kids outgrow.
            Nothing goes to waste, and you get paid too!
          </p>
        </div>
        <div className="md:w-auto md:h-auto h-[15rem]">
          <Image alt="Girl" src="/girl.png" width={"100%"} height={"100%"} />
        </div>
      </div>

      <div className="absolute bottom-[20%] right-[45%] md:block hidden">
        <img src="/butterfly.svg" alt="Hero" />
      </div>
    </div>
  )
}
