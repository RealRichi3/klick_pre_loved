"use client"
import React from "react"
import { Form, Input, Radio, Space } from "antd"
import { FormInstance, useForm } from "antd/es/form/Form"
import { FileInput } from "./FileInput"
import { CustomButton } from "./CustomButton"
import { ProductI } from "@/app/api/product.type"

interface props {
  formData: ProductI
  setFormData: React.Dispatch<React.SetStateAction<ProductI>>
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  form1: FormInstance<any>
  form2: FormInstance<any>
}

export const ProductDetailsForm = ({
  formData,
  setFormData,
  setActiveIndex,
  form1,
  form2,
}: props) => {
  const onFinish = (values: any) => {
    setActiveIndex(1)
    console.log(formData)
  }
  return (
    <div>
      <Form
        form={form1}
        layout="vertical"
        initialValues={formData}
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
            <Radio.Group
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              value={formData.category}
            >
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
          name="product_name"
          rules={[
            {
              required: true,
              message: "Please input the Product Name & Brand!",
            },
          ]}
        >
          <Input
            size="large"
            className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value })
            }}
            value={formData.name}
          />
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
          <Radio.Group
            onChange={(e) =>
              setFormData({ ...formData, condition: e.target.value })
            }
            value={formData.condition}
          >
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
          label="Wear and Tear"
          name="wear_and_tear"
          rules={[
            {
              required: false,
              message:
                "Please input the Wear and Tear (if any) of the Product!",
            },
          ]}
        >
            <Input
              onChange={(e) =>
                setFormData({ ...formData, wear_tear: e.target.value })
              }
              size="large"
              className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
              type="text"
              value={formData.wear_tear}
            />
        </Form.Item>
        <Form.Item
          label="Original Price (Current Market Price)"
          name="original_price"
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
              onChange={(e) =>
                setFormData({ ...formData, original_price: e.target.value })
              }
              size="large"
              className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
              type="number"
              value={formData.original_price}
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
              type="number"
              onChange={(e) =>
                setFormData({ ...formData, selling_price: e.target.value })
              }
              size="large"
              className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
              value={formData.selling_price}
            />
            <p className="mt-4">
              <i>
                Note: Please follow pricing guidelines for quick sales and do
                note that we deduct a 12.5% commission of the sale price.
              </i>
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
          <Input
            size="large"
            type="number"
            className="bg-[#FAFAFA] md:w-[60%] lg:w-[40%]"
            onChange={(e) =>
              setFormData({ ...formData, year_of_purchase: e.target.value })
            }
            value={formData.year_of_purchase}
          />
        </Form.Item>

        {/* ----------------------------------------------------------- */}
        <Form.Item
          label="Product Applicable Age Group"
          name="product_age_group"
          rules={[
            {
              required: true,
              message: "Please input the Product Applicable Age Group!",
            },
          ]}
        >
          <Radio.Group
            onChange={(e) =>
              setFormData({ ...formData, product_age_group: e.target.value })
            }
            value={formData.product_age_group}
          >
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
            in sharp focus. Avoid blurry shots. Note: All file sizes should be atmost 4MB
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
            <FileInput
              accept=".jpg, .png, .jpeg"
              id="front"
              setValue={(value) =>
                setFormData({ ...formData, front_side_image: value })
              }
              value={formData.front_side_image}
            />
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
            <FileInput
              accept=".jpg, .png, .jpeg"
              id="left"
              setValue={(value) =>
                setFormData({ ...formData, left_side_image: value })
              }
              value={formData.left_side_image}
            />
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
            <FileInput
              accept=".jpg, .png, .jpeg"
              id="Right"
              setValue={(value) =>
                setFormData({ ...formData, right_side_image: value })
              }
              value={formData.right_side_image}
            />
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
            <FileInput
              accept=".jpg, .png, .jpeg"
              id="Back"
              setValue={(value) =>
                setFormData({ ...formData, back_side_image: value })
              }
              value={formData.back_side_image}
            />
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
            <FileInput
              accept=".mp4, .mov"
              id="video"
              setValue={(value) =>
                setFormData({ ...formData, product_video: value })
              }
              value={formData.product_video}
            />
            <p className="mt-4">
              <i>
                Note: Upload a Video in .MP4 or .MOV format. All file sizes should be atmost 4MB .
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
