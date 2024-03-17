"use client"
import React from "react"
import { Form, Input, Radio, Space } from "antd"
import { useForm } from "antd/es/form/Form"
import { FileInput } from "./FileInput"
import { CustomButton } from "./CustomButton"

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
          label="Product Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please input the Product Category!",
            },
          ]}
        >
          <div>
            <Radio.Group>
              <Radio value="Furniture">Furniture</Radio>
              <Radio value="Toys">Toys</Radio>
              <Radio value="Books">Books</Radio>
              <Radio value="Clothing & Accessories">
                Clothing & Accessories
              </Radio>
              <Radio value="Maternity">Maternity</Radio>
              <Radio value="Bath and Diapering">Bath and Diapering</Radio>
              <Radio value="Outdoor Play">Outdoor Play</Radio>
              <Radio value="Others">Others</Radio>
            </Radio.Group>
            <p className="mt-4">
              <i>
                Note: Only Brand New Clothing & Accessories are allowed to be
                listed
              </i>
            </p>
          </div>
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
              <Radio value="Brand New (Sealed)- 70- 75% of Current Market Value">
                Brand New (Sealed)- 70- 75% of Current Market Value
              </Radio>
              <Radio value="Used - 50% of Current Market Value">
                Used - 50% of Current Market Value
              </Radio>
              <Radio value="Heavily Used - 40% of Current Market Value">
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
          <div>
            <Input
              size="large"
              className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
            />
            <p className="mt-4">
              <i>
                Note: It&apos;s always a good idea to verify the price online.
                We double check this online!
              </i>
            </p>
          </div>
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
          <div>
            <Input
              size="large"
              className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
            />
            <p className="mt-4">
              <i>Note: Please follow pricing guidelines for quick sales</i>
            </p>
          </div>
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
            <Radio value="0-6 Months">0-6 Months</Radio>
            <Radio value="6-12 Months">6-12 Months</Radio>
            <Radio value="1-2 Years">1-2 Years</Radio>
            <Radio value="2-4 Years">2-4 Years</Radio>
            <Radio value="4+ Years">4+ Years</Radio>
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
          <div>
            <FileInput accept=".jpg, .png, .svg, .jpeg" id="front" />
          </div>
        </Form.Item>

        {/* ----------------------------------------------------------- */}

        <Form.Item
          label="Left Hand Side Product Photo"
          name="left_side_photo"
          rules={[
            {
              required: true,
              message: "Please input the Left Hand Side Product Photo!",
            },
          ]}
        >
          <div>
            <FileInput accept=".jpg, .png, .svg, .jpeg" id="left" />
          </div>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Right Hand Side Product Photo"
          name="right_side_photo"
          rules={[
            {
              required: true,
              message: "Please input the Right Hand Side Product Photo!",
            },
          ]}
        >
          <div>
            <FileInput accept=".jpg, .png, .svg, .jpeg" id="Right" />
          </div>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Back Side Product Photo"
          name="back_side_photo"
          rules={[
            {
              required: true,
              message: "Please input the Back Side Product Photo!",
            },
          ]}
        >
          <div>
            <FileInput accept=".jpg, .png, .svg, .jpeg" id="Back" />
          </div>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Product Video"
          name="product_video"
          rules={[
            {
              required: true,
              message: "Please input the Product Video!",
            },
          ]}
        >
          <div>
            <FileInput accept=".mp4, .mov" id="video" />
            <p className="mt-4">
              <i>
                Note: Upload a Video in .MP4 or .MOV format (up to 20MB max).
                Share a 360-angle video
              </i>
            </p>
          </div>
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <CustomButton>Next</CustomButton>
      </Form>
    </div>
  )
}
