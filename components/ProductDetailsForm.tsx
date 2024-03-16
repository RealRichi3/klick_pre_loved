"use client"
import React from "react"
import { Form, Input, Radio, Space } from "antd"
import { useForm } from "antd/es/form/Form"
import { FileInput } from "./FileInput"

export const ProductDetailsForm = () => {
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
        <Form.Item
          label="Product Information"
          name="infomation"
          rules={[
            {
              required: true,
              message: "Please input the Product Information!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="furniture">Furniture</Radio>
            <Radio value="toys">Toys</Radio>
            <Radio value="books">Books</Radio>
            <Radio value="clothing">Clothing & Accessories</Radio>
            <Radio value="maternity">Maternity</Radio>
            <Radio value="bath">Bath and Diapering</Radio>
            <Radio value="outdoor">Outdoor Play</Radio>
            <Radio value="others">Others</Radio>
          </Radio.Group>
          <p className="mt-4">
            <i>
              Note: Only Brand New Clothing & Accessories are allowed to be
              listed
            </i>
          </p>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Product Name & Brand"
          name="productName"
          rules={[
            {
              required: true,
              message: "Please input the Product Name & Brand!",
            },
          ]}
        >
          <Input size="large" className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]" />
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Product Condition"
          name="condition"
          rules={[
            {
              required: true,
              message: "Please input the Product Condition!",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio value="new">
                Brand New (Sealed)- 70- 75% of Current Market Value
              </Radio>
              <Radio value="used">Used - 50% of Current Market Value</Radio>
              <Radio value="heavily_used">
                Heavily Used - 40% of Current Market Value
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Original Price (Current Market Price)"
          name="price"
          rules={[
            {
              required: true,
              message:
                "Please input the Original Price (Current Market Price)!",
            },
          ]}
        >
          <Input size="large" className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]" />
          <p className="mt-4">
            <i>
              Note: It&apos;s always a good idea to verify the price online. We
              double check this online!
            </i>
          </p>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Selling Price"
          name="selling_price"
          rules={[
            {
              required: true,
              message: "Please input the Selling Price!",
            },
          ]}
        >
          <Input size="large" className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]" />
          <p className="mt-4">
            <i>Note: Please follow pricing guidelines for quick sales</i>
          </p>
        </Form.Item>

        {/* ----------------------------------------------------------- */}

        <Form.Item
          label="Year of Purchase"
          name="year_of_purchase"
          rules={[
            {
              required: true,
              message: "Please input the Year of Purchase!",
            },
          ]}
        >
          <Input size="large" className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]" />
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Product Applicable Age Group"
          name="age_group"
          rules={[
            {
              required: true,
              message: "Please input the Product Applicable Age Group!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="0-6">0-6 Months</Radio>
            <Radio value="6-12">6-12 Months</Radio>
            <Radio value="1-2">1-2 Years</Radio>
            <Radio value="2-4">2-4 Years</Radio>
            <Radio value="4+">4+ Years</Radio>
          </Radio.Group>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Product Photos & Video</h4>
          <p className="text-md">
            The better the photo, the faster the sale! Click your items in a
            neutral, uncluttered, well-lit background. Aim for photos with items
            in sharp focus. Avoid blurry shots.
          </p>
        </div>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Front Side Product Photo"
          name="front_side_photo"
          rules={[
            {
              required: true,
              message: "Please input the Front Side Product Photo!",
            },
          ]}
        >
          <FileInput accept=".jpg, .png, .svg, .jpeg" />
        </Form.Item>

        {/* ----------------------------------------------------------- */}
      </Form>
    </div>
  )
}
