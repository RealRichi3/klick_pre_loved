"use client";
import React, { useEffect, useState } from "react";
import { Form, Input, notification, message as antMessage, Select } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";
import { CustomButton } from "./CustomButton";
import { ProductI } from "@/app/api/product.type";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import { BiSmile, BiNote } from "react-icons/bi";
import { FaFrown } from "react-icons/fa";
import DataStore from "./store.json";
import BankDataStore from "./bank.json";

interface props {
  formData: ProductI & {
    bank_name?: string;
    bank_account_number?: string;
    bank_account_name?: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<ProductI>>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  form1: FormInstance<any>;
  form2: FormInstance<any>;
}
function convertDataURIToFile(dataUri: string, fileName: string) {
  console.log({ dataUri });
  const byteString = atob(dataUri.split(",")[1]);
  const mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new File([ab], fileName, { type: mimeString });
}

export const SellerInformationForm = ({
  formData: _formData,
  form2,
  form1,
  setActiveIndex,
}: props) => {
  console.log({
    form1,
    form2,
    _formData,
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState<typeof _formData>({
    ..._formData,
    seller_state: "Lagos",
  });

  const openNotification = (icon: React.JSX.Element, message: string) => {
    api.open({
      message: "Feedback Notification",
      description: message,
      icon,
      duration: 10,
    });
  };
  const onFinish = async () => {
    setIsLoading(true);
    try {
      console.log({ formData });
      // Convert all images to files before sendind as form data

      // Convert base64 image data to File object

      // Create a new FormData object
      const formDataToSend = new FormData();

      // Append other form data fields
      for (const [key, value] of Object.entries(formData)) {
        console.log({ value });
        const image_keys = [
          "front_side_image",
          "left_side_image",
          "right_side_image",
          "back_side_image",
          "product_video",
        ];
        if (image_keys.includes(key)) {
          const image_key = image_keys[image_keys.indexOf(key)];
          const imageData = value as string;
          // If the field is 'images', convert each image data URI to a File object
          const matches = imageData.match(/^data:(.+);base64/);
          if (!matches) {
            throw new Error("Invalid data URI");
          }
          const extensions = {
            "image/jpeg": "jpg",
            "image/png": "png",
            "image/gif": "gif",
            "image/webp": "webp",
            "image/bmp": "bmp",
            "image/tiff": "tiff",
            "image/svg+xml": "svg",
            "image/x-icon": "ico",

            // Videos
            "video/mp4": "mp4",
            "video/webm": "webm",
            "video/ogg": "ogv",
            "video/quicktime": "mov",
            "video/x-msvideo": "avi",
            "video/x-matroska": "mkv",
            "video/x-flv": "flv",
            "video/3gpp": "3gp",
          };
          // Convert base64-encoded data to binary buffer
          const fileExtension =
            image_key === "product_video"
              ? "video/mp4"
              : imageData.split("data:image/")[1].split(";base64")[0];

          fileExtension === "video/mp4" && console.log({ imageData });
          const file = convertDataURIToFile(
            imageData,
            `${image_key}.${extensions[fileExtension as keyof typeof extensions]}`,
          );
          console.log({ file });
          formDataToSend.append(image_key, file);
        } else {
          // Append other form fields
          formDataToSend.append(key, value);
        }
      }

      formDataToSend.append("date", new Date().toDateString());
      // log all the values in the form data
      openNotification(
        <BiNote className="text-[#34E065] text-2xl" />,
        "Please be patient- this could take a minute or two - Thank you for trusting Klick",
      );

      await fetch("https://klick-pre-loved-vsu9.onrender.com/preloved", {
        method: "POST",
        body: formDataToSend,
      })
        .then((res) => {
          console.log({ res });
          setIsLoading(false);
          if (!res.ok) {
            setIsLoading(false);
            openNotification(
              <FaFrown className="text-[red] text-2xl" />,
              "An error occurred",
            );
            return;
          }
          openNotification(
            <BiSmile className="text-[#34E065] text-2xl" />,
            "Thank you, you have successfully submitted your product listing for review.",
          );
          form1.resetFields();
          form2.resetFields();
        })
        .catch((e) => {
          setIsLoading(false);
          openNotification(
            <FaFrown className="text-[red] text-2xl" />,
            e.message ?? "An error occurred",
          );
          return;
        });
    } catch (error: any) {
      console.log({ errorRes: error });
      setIsLoading(false);
      openNotification(
        <FaFrown className="text-[red] text-xl" />,
        error?.message?.replaceAll("_", " ") ||
          error?.data?.messsage?.replaceAll("_", " ") ||
          "An error occurred",
      );
    }
  };

  useEffect(() => {
    setFormData({ ...formData, seller_state: "Lagos" });
  }, []);
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
              label="City"
              name="seller_city"
              rules={[
                {
                  required: true,
                  message: "Please input the City!",
                },
              ]}
            >
              <Select
                size="large"
                className="bg-[#FAFAFA]"
                options={DataStore.states
                  .find((state) => state.name === formData.seller_state)
                  ?.cities.map((city) => ({
                    value: city.name,
                    label: city.name,
                    key: city.id,
                  }))}
                onChange={(e) => setFormData({ ...formData, seller_city: e })}
              />
            </Form.Item>
          </div>

          {/* ----------------------------------------------------------- */}

          {/* ----------------------------------------------------------- */}
          <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          </div>

          <div className="flex flex-col md:grid-cols-2 md:gap-8 gap-1" style={{ maxWidth: '400px'}}>
            <Form.Item
              label="State"
              initialValue="Lagos"
              name="seller_state"
              rules={[
                {
                  required: true,
                  message: "Please input the State!",
                },
              ]}
            >
              <Select
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) => setFormData({ ...formData, seller_state: e })}
                options={DataStore.states.map((state) => ({
                  value: state.name,
                  label: state.name,
                  key: state.id,
                }))}
              />
            </Form.Item>

            <Form.Item
              label="Bank Name"
              name="bank_name"
              rules={[
                {
                  required: false,
                  message: "Please input the Bank name!",
                },
              ]}
            >
              <Select
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) => setFormData({ ...formData, bank_name: e })}
                options={BankDataStore.map((bank) => ({
                  value: bank.name,
                  label: bank.name,
                  key: bank.id,
                }))}
              />
            </Form.Item>
            <Form.Item
              label="Bank Account Number"
              name="bank_account_number"
              rules={[
                {
                  required: false,
                  message: "Please input the Account Number!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bank_account_number: e.target.value,
                  })
                }
              />
            </Form.Item>
            <Form.Item
              label="Account Name"
              name="bank_account_name"
              rules={[
                {
                  required: false,
                  message: "Please input the Account Name!",
                },
              ]}
            >
              <Input
                size="large"
                className="bg-[#FAFAFA]"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bank_account_name: e.target.value,
                  })
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
  );
};
