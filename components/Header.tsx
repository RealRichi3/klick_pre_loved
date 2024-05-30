"use client";
import React from "react";
import { KlickLogo, Logo } from "./Logo";
import Link from "next/link";
import { Button, Drawer } from "antd";
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { CustomButton } from "./CustomButton";

const paths = [
  { path: "#why-sell-with-us", name: "Why Sell With Us" },
  { path: "#how-to-sell", name: "How To Sell" },
  { path: "#sellers-guidelines", name: "Sellers Guidelines" },
];
export const Header = () => {
  const [active, setActive] = React.useState("#why-sell-with-us");
  const [open, setOpen] = React.useState(false);
  return (
    <header
      className="flex justify-between items-center md:py-[24px] py-[10px] flex-wrap w-[95%] mx-auto md:w-[80%] lg:w-[70%] 3xl:w-[60%]"
      id="klick"
    >
      <Logo />
      <nav>
        <ul className="p-0 md:flex justifiy-between hidden items-center flex-wrap">
          {paths.map((item) => (
            <li key={item.path} className="mr-[40px]">
              <Link
                href={item.path}
                onClick={() => setActive(item.path)}
                className={`text-[15px] p-[8px] hover:text-primary transition-all ${
                  active === item.path
                    ? "text-primary font-semibold"
                    : "text-base"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#sell-with-us">
              <CustomButton
                style={{
                  padding: "12px 24px",
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                  borderTopLeftRadius: "20px",
                  borderBottomLeftRadius: "20px",
                  color: "#fff",
                  marginRight: "5px",
                }}
              >
                {" "}
                Get Started
              </CustomButton>
            </Link>
            <Link href="https://klick.africa" target="_blank">
              <CustomButton
                style={{
                  padding: "10px 24px",
                  background: "#FF6B3C",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  borderTopRightRadius: "20px ",
                  borderBottomRightRadius: "20px",
                  color: "#fff",
                }}
              >
                {" "}
                <div className="flex items-center">
                  <p style={{ marginRight: "5px" }}> Shop Now</p>
                  <KlickLogo />
                </div>
              </CustomButton>
            </Link>
          </li>
          <li></li>
        </ul>

        <div className="md:hidden">
          <Button
            type="dashed"
            icon={<MenuFoldOutlined />}
            onClick={() => setOpen(true)}
          >
            Menu
          </Button>
          <Drawer
            open={open}
            onClose={() => setOpen(false)}
            placement="bottom"
            closeIcon={<CloseCircleOutlined />}
          >
            <ul className="p-0 flex flex-col gap-[24px] justifiy-between">
              {paths.map((item, index) => (
                <li
                  key={item.path}
                  className="mr-[32px]"
                  onClick={() => setOpen(false)}
                >
                  <Link
                    href={item.path}
                    onClick={() => setActive(item.path)}
                    className={`text-[18px] hover:text-primary ${
                      active === item.path ? "text-primary" : "text-base"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="#sell-with-us">
                  <CustomButton>Get Started</CustomButton>
                </Link>
              </li>
              <li>
                <Link href="https://klick.africa" target="_blank">
                  <CustomButton
                    style={{
                      padding: "10px 30px",
                      background: "#FF6B3C",
                      color: "#fff",
                    }}
                  >
                    {" "}
                    <div className="flex items-center">
                      <p style={{ marginRight: "5px" }}> Shop Now</p>
                      <KlickLogo />
                    </div>
                  </CustomButton>
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </nav>
    </header>
  );
};
