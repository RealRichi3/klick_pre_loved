import React from "react"
import { FaRegClock } from "react-icons/fa"
import { PiClockClockwise } from "react-icons/pi"
import { SlWallet } from "react-icons/sl"
import { TbUserCancel } from "react-icons/tb"

const reasons = [
  {
    icon: <FaRegClock size={20} className="text-primary" />,
    title: "Quick Product Listing",
    description:
      "Your product will be live in no time with our quick listing service.",
  },
  {
    icon: <SlWallet size={20} className="text-primary" />,
    title: "Convenient Payment",
    description: "Quick and convenient payment choices available.",
  },
  {
    icon: <TbUserCancel size={20} className="text-primary" />,
    title: "Stay Anonymous",
    description: "Your privacy matters – stay anonymous securely.",
  },
  {
    icon: <PiClockClockwise size={20} className="text-primary" />,
    title: "Saves you Time",
    description: "We find the buyers for you.",
  },
]

export const WhySell = () => {
  return (
    <div
      id="why-sell-with-us"
      className="md:py-[0rem] pt-9 mb-[2rem] md:mb-[3rem] relative overflow-hidden reveal-down"
    >
      <div className="w-[90%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%]">
        <h2 className="md:text-[48px] text-[24px] pb-[1rem] md:pb-[2rem] text-center">
          Why Sell with Us
        </h2>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
          {reasons.map((reason, index) => (
            <div className="bg-gray-200/30 rounded-lg" key={index}>
              <div className="p-4">
                {reason.icon}
                <h3 className="md:text-[20px] font-semibold pt-4">
                  {reason.title}
                </h3>
                <p className="md:text-[15px] text-[12px] pt-2">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
