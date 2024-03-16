"use client"
import React from "react"
import { Form, Input, Radio, Space } from "antd"
import { useForm } from "antd/es/form/Form"
import { FileInput } from "./FileInput"
import { CustomButton } from "./CustomButton"

export const SellerInformationForm = () => {
  const [form] = useForm()
  const onFinish = (values: any) => {}
  return (
    <div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{}}
        onFinish={onFinish}
      >
        {/* ----------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input the First Name",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input the Last Name",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input the Email!",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" type="email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input the Phone Number!",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input the Address!",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: "Please input the State!",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <Form.Item
            label="City"
            name="city"
            rules={[
              {
                required: true,
                message: "Please input the City!",
              },
            ]}
          >
            <Input size="large" className="bg-[#FAFAFA]" />
          </Form.Item>
        </div>

        {/* ----------------------------------------------------------- */}
        <div className="flex justify-center">
          <CustomButton style={{ padding: "0.7rem 6rem" }}>Submit</CustomButton>
        </div>
      </Form>
    </div>
  )
}
