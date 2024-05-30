"use client";
import React from "react";
import { Accordion, AccordionProps } from "./Accordion";

const items: AccordionProps[] = [
  {
    title: "Photography Guidelines",
    content: (
      <div>
        <p className="mb-4">
          Great image listings lead to successful sales. Here’s all you need to
          know about how to create yours on Klick Preloved
        </p>
        <div className="mb-4">
          <p className="text-primary">Get the perfect click</p>
          <p className="text-[#0B0E0C]/50">
            Click your items in a neutral, uncluttered, well-lit background. Aim
            for photos with items in sharp focus. Avoid blurry shots.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-primary">Pick out the best photos</p>
          <p className="text-[#0B0E0C]/50">
            Select 3 or more photos and add them to your listing. Ensure the
            photos you upload depict the actual item as clearly as possible from
            all angles. Choose images that accurately indicate size, colour,
            make and signs of wear and tear, if any. Please make sure the file
            sizes are less than 4mb
          </p>
        </div>
        <div className="mb-4">
          <p className="text-primary">Add a 360º video</p>
          <p className="text-[#0B0E0C]/50">
            To make your listing stronger, add a well-shot, 360º video of your
            item as well.
          </p>
        </div>
        <p className="text-primary">
          Pro-tip: Take photos the way you’d like to buy them.
        </p>
      </div>
    ),
  },
  {
    title: "Pricing & Payment Details",
    content: (
      <div>
        <p className="mb-4">
          The process of online selling can seem so complicated. But, we’ve made
          it easy for you! Simply follow the steps below and you’re set to go
        </p>
        <div className="mb-4">
          <p className="text-primary">Fix the right price</p>
          <p className="text-[#0B0E0C]/50 mb-4">
            Calculate your item’s resale value based on its usage and
            condition.  Here are our pricing suggestions:
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            Brand New (Sealed)- 70- 75% of Current Market Value
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            Used - 50% of Current Market Value
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            Heavily Used - 40% of Current Market Value
          </p>
        </div>
        <div className="mb-4">
          <p className="text-primary">Make the sale</p>
          <p className="text-[#0B0E0C]/50 mb-4">
            Select 3 or more photos and add them to your listing. Ensure the
            photos you upload depict the actual item as clearly as possible from
            all angles. Choose images that accurately indicate size, colour,
            make and signs of wear and tear, if any.
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            1. Once the sale of your item is processed (once your item is sold,
            we will inform you via email), keep it packed and ready. We can
            offer you a price for collection or alternatively you can have the
            item delivered to the Klick Drop-off Location.
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            2. If any particular item is no longer available for sale, please
            inform us via email immediately.
          </p>
          <p className="text-[#0B0E0C]/50 mb-4">
            3. In case your item doesn’t find a buyer within 60 days, we will
            assist you by reviewing your listing.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-primary">Get paid</p>
          <p className="text-[#0B0E0C]/50 mb-4">
            1. Once your item reaches its new home, and we have had confirmation
            of this, you will receive your payment within 2 working days
          </p>
          <p className="text-[#0B0E0C]/50">
            2. Payments will be made only after we receive confirmation that the
            items have been delivered in good condition. Klick Africa will make
            payments to you net of our 12.5% commission. In case, any item sold
            by you does not match its listing description or images, no payment
            can be made and you will be required to bear the full cost of return
            and transport cost.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Get Verified",
    content: (
      <div>
        <div className="mb-4">
          <p className="mb-4">
            Your product listing will be displayed on the platform{" "}
            <a
              href="https://klick.africa"
              style={{ textDecoration: "underline", color: "#FF6B3C" }}
            >
              Klick Africa
            </a>{" "}
            after a quick review by our team.
          </p>
        </div>
      </div>
    ),
  },
];

export const SellersGuidelines = () => {
  return (
    <div
      id="sellers-guidelines"
      className="md:py-[0rem] pt-9 mb-[2rem] md:mb-[3rem] relative overflow-hidden"
    >
      <div className="w-[90%] mx-auto md:w-[90%] lg:w-[40%] 3xl:w-[40%]">
        <h2 className="md:text-[40px] text-[24px] pb-[1rem] md:pb-[2rem] text-center">
          Sellers Guidelines
        </h2>
        <div>
          <Accordion items={items} />
        </div>
      </div>
    </div>
  );
};
