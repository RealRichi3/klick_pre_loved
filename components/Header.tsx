"use client"
import React from "react"
import { Logo } from "./Logo"
import Link from "next/link"
import { Button, Drawer } from "antd"
import { CloseCircleOutlined, MenuFoldOutlined } from "@ant-design/icons"

const paths = [
  { path: "#why-sell-with-us", name: "Why sell with us" },
  { path: "#how-to-sell", name: "How to Sell" },
  { path: "#sellers-guidelines", name: "Sellers Guidelines" },
]
export const Header = () => {
  const [active, setActive] = React.useState("#why-sell-with-us")
  const [open, setOpen] = React.useState(false)
  return (
    <header className="flex justify-between items-center md:py-[24px] py-[10px] flex-wrap w-[95%] mx-auto md:w-[80%] lg:w-[70%] 3xl:w-[60%]">
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
            <Link href="">
              <Button>Contact Us</Button>
            </Link>
          </li>
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
                <Link href="/contact-us">
                  <Button>Contact Us</Button>
                </Link>
              </li>
            </ul>
          </Drawer>
        </div>
      </nav>
    </header>
  )
}