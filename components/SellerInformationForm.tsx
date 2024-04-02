"use client"
import React, { useState } from "react"
import { Form, Input, notification, message as antMessage } from "antd"
import { FormInstance, useForm } from "antd/es/form/Form"
import { CustomButton } from "./CustomButton"
import { ProductI } from "@/app/api/product.type"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import "react-phone-number-input/style.css"
import PhoneInputWithCountrySelect from "react-phone-number-input"
import { BiSmile } from "react-icons/bi"
import { FaFrown } from "react-icons/fa"

interface props {
  formData: ProductI
  setFormData: React.Dispatch<React.SetStateAction<ProductI>>
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  form1: FormInstance<any>
  form2: FormInstance<any>
}

export const SellerInformationForm = ({
  formData,
  setFormData,
  setActiveIndex,
  form2,
  form1,
}: props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (icon: React.JSX.Element, message: string) => {
    api.open({
      message: "Feedback Notification",
      description: message,
      icon,
      duration: 5,
    })
  }
  const onFinish = async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/submit-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        setIsLoading(false)
        openNotification(
          <FaFrown className="text-[red] text-2xl" />,
          data?.message?.replaceAll("_", " ") ||
            data?.data?.messsage?.replaceAll("_", " ") ||
            "An error occurred"
        )
        return
      }

      setIsLoading(false)
      openNotification(
        <BiSmile className="text-[#34E065] text-2xl" />,
        data.message
      )
      form1.resetFields()
      form2.resetFields()
    } catch (error: any) {
      setIsLoading(false)
      openNotification(
        <FaFrown className="text-[red] text-xl" />,
        error?.message?.replaceAll("_", " ") ||
          error?.data?.messsage?.replaceAll("_", " ") ||
          "An error occurred"
      )
    }
  }
  return (
    <>
      {contextHolder}
      <div>
        <Form
          form={form2}
          layout="vertical"
          initialValues={formData}
          onFinish={onFinish}
        >
          {/* ----------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 md:gap-8 gap-1">
            <Form.Item
              label="First Name"
              name="seller_first_name"
              rules={[
                {
                  required: true,
                  message: "Please input the First Name",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    seller_first_name: e.target.value,
                  })
                }
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="seller_last_name"
              rules={[
                {
                  required: true,
                  message: "Please input the Last Name",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({ ...formData, seller_last_name: e.target.value })
                }
              />
            </Form.Item>
          </div>

          {/* ----------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 md:gap-8 gap-1">
            <Form.Item
              label="Email"
              name="seller_email"
              rules={[
                {
                  required: true,
                  message: "Please input the Email!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, seller_email: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="seller_phone_number"
              rules={[
                {
                  required: true,
                  message: "Please input the Phone Number!",
                },
              ]}
            >
              <PhoneInputWithCountrySelect
                size="large"
                className="bg-[#FAFAFA] w-full border-gray-300 border-[1px] p-2 text-lg rounded-md"
                country="NG"
                defaultCountry="NG"
                onChange={(value) =>
                  setFormData({
                    ...formData,
                    seller_phone_number: value as string,
                  })
                }
                value={formData.seller_phone_number}
              />
            </Form.Item>
          </div>

          {/* ----------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 md:gap-8 gap-1">
            <Form.Item
              label="Address"
              name="seller_address"
              rules={[
                {
                  required: true,
                  message: "Please input the Address!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({ ...formData, seller_address: e.target.value })
                }
              />
            </Form.Item>

            <Form.Item
              label="State"
              name="seller_state"
              rules={[
                {
                  required: true,
                  message: "Please input the State!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({ ...formData, seller_state: e.target.value })
                }
              />
            </Form.Item>
          </div>

          {/* ----------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 md:gap-8 gap-1">
            <Form.Item
              label="City"
              name="seller_city"
              rules={[
                {
                  required: true,
                  message: "Please input the City!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({ ...formData, seller_city: e.target.value })
                }
              />
            </Form.Item>
          </div>

          {/* ----------------------------------------------------------- */}
          <div className="md:flex-row flex flex-col justify-center gap-5">
            {!isLoading && (
              <CustomButton
                style={{ padding: "0.7rem 6rem" }}
                disabled={isLoading}
                onClick={() => setActiveIndex(0)}
              >
                Go Back
              </CustomButton>
            )}
            <CustomButton
              style={{ padding: "0.7rem 6rem" }}
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <span className="inline-flex items-center gap-3">
                  <AiOutlineLoading3Quarters className="animate-spin" />
                  <span>Submitting Product...</span>
                </span>
              ) : (
                "Submit"
              )}
            </CustomButton>
          </div>
        </Form>
      </div>
    </>
  )
}
