"use client"
import React, { useState } from "react"

export interface TabProps {
  title: string
  content: React.ReactNode
}

export interface props {
  items: TabProps[]
}

export const Tabs: React.FC<props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const titles = items.map((item) => item.title)
  return (
    <div className="border-2 border-grey-400 rounded-xl">
      <div className="flex justify-between">
        {titles.map((title, index) => (
          <div
            key={title}
            onClick={() => setActiveIndex(index)}
            className={`w-full text-center p-5 border-b-2 transition-all duration-10 cursor-pointer text-[14px] md:text-[18px] ${
              activeIndex === index
                ? "text-black font-semibold border-primary"
                : "text-[#98999A] border-grey-400"
            }`}
          >
            <span>{title}</span>
          </div>
        ))}
      </div>
      <div className="p-5">{items[activeIndex].content}</div>
    </div>
  )
}
