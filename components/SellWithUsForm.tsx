"use client"
import React from "react"
import { TabProps, Tabs } from "./Tabs"
import { ProductDetailsForm } from "./ProductDetailsForm"
const items: TabProps[] = [
  {
    title: "1/2. Product Details",
    content: <ProductDetailsForm />,
  },
  {
    title: "2/2. Seller Information",
    content: <form>Hey</form>,
  },
]

export const SellWithUsForm = () => {
  return (
    <div
      id="sell-with-us"
      className="md:py-[0rem] pt-9 mb-[2rem] md:mb-[3rem] md:mt-[4rem] relative overflow-hidden reveal-down"
    >
      <div className="w-[90%] mx-auto md:w-[90%] lg:w-[60%] 3xl:w-[60%]">
        <h2 className="md:text-[40px] text-[24px] pb-[1rem] md:pb-[2rem] text-center">
          Sell With Us Form
        </h2>
        <div>
          <Tabs items={items} />
        </div>
      </div>
    </div>
  )
}
