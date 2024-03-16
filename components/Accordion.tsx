"use client"
import React, { FC } from "react"
import { MinusCircleIcon, PlusCircleIcon } from "./Icons"

export interface AccordionProps {
  title: string
  content: React.ReactNode
}
export interface props {
  items: AccordionProps[]
}

export const Accordion: FC<props> = ({ items }) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0)
  const lastItem = items.length - 1
  return (
    <div className="transition ease-in-out delay-[5s] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={index}
          className="my-[32px] transition ease-in-out delay-[5s]"
        >
          <div
            className="flex justify-between mb-[8px] cursor-pointer transition ease-in-out delay-[5s]"
            onClick={() =>
              setActiveIndex(() => (activeIndex === index ? null : index))
            }
          >
            <p className="text-[20px] font-[600]">{item.title}</p>
            <p>
              {activeIndex === index ? <MinusCircleIcon /> : <PlusCircleIcon />}
            </p>
          </div>
          {activeIndex === index && (
            <div className="reveal-down overflow-hidden transition ease-in-out delay-[5s]">
              {item.content}
            </div>
          )}
          <hr className="my-[32px]" />
        </div>
      ))}
    </div>
  )
}
