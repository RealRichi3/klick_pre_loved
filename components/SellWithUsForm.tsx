"use client"
import React from "react"
import { TabProps, Tabs } from "./Tabs"
import { ProductDetailsForm } from "./ProductDetailsForm"
import { SellerInformationForm } from "./SellerInformationForm"
import { ProductI } from "@/app/api/product.type"
import { useForm } from "antd/es/form/Form"

const initialValues: ProductI = {
  category: "",
  name: "",
  product_age_group: "",
  original_price: "",
  selling_price: "",
  condition: "",
  year_of_purchase: "",
  front_side_image: "",
  back_side_image: "",
  right_side_image: "",
  left_side_image: "",
  product_video: "",
  seller_first_name: "",
  seller_last_name: "",
  seller_email: "",
  seller_phone_number: "+234",
  seller_address: "",
  seller_city: "",
  seller_state: "",
}

export const SellWithUsForm = () => {
  const [form1] = useForm()
  const [form2] = useForm()
  const [formData, setFormData] = React.useState<ProductI>(initialValues)
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  const items: TabProps[] = [
    {
      title: "1/2. Product Details",
      content: (
        <ProductDetailsForm
          {...{ formData, setFormData, setActiveIndex, form1, form2 }}
        />
      ),
    },
    {
      title: "2/2. Seller Information",
      content: (
        <SellerInformationForm
          {...{ formData, setFormData, setActiveIndex, form2, form1 }}
        />
      ),
    },
  ]

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
          <Tabs {...{ items, activeIndex, setActiveIndex }} />
        </div>
      </div>
    </div>
  )
}
