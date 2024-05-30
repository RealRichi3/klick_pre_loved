import React from "react";

export const HowToSell = () => {
  return (
    <div
      className="bg-[#E10098]/10 py-[1rem] md:py-[2rem] px-4 mb-[2rem] md:mb-[3rem] relative overflow-hidden reveal-down"
      id="how-to-sell"
    >
      <div className="w-[95%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%]">
        <div className="md:py-[0rem] pt-9 mb-[2rem] md:mb-[3rem] relative overflow-hidden reveal-down">
          <h2 className="md:text-[40px] text-[24px] pb-[1rem] md:pb-[2rem] text-center capitalize">
            How to Sell
          </h2>

          <div className="lg:flex items-center justify-center z-[2] relative hidden">
            <img src="/rings.svg" alt="How to sell" />
          </div>
          <div className="w-full lg:mt-[-18rem] z-[10] relative grid lg:grid-cols-4 md:grid-cols-2 gap-5">
            <div className="bg-white flex items-center  gap-3 flex-col py-6 md:px-5 px-4">
              <img
                src="/pencil.svg"
                alt="How to sell"
                className="md:w-[3rem] w-[2rem]"
              />
              <h3 className="md:text-[18px] text-[18px] uppercase font-semibold">
                FILL THE FORM
              </h3>
              <p className="text-[#6A6B6C] text-center md:text-[16px]">
                Complete your product listing in less than 5 minutes.
              </p>
            </div>
            <div className="bg-white flex items-center  gap-3 flex-col py-6 md:px-5 px-4">
              <img
                src="/check.svg"
                alt="How to sell"
                className="md:w-[3rem] w-[2rem]"
              />
              <h3 className="md:text-[18px] text-[18px] uppercase font-semibold">
                GET VERIFIED{" "}
              </h3>
              <p className="text-[#6A6B6C] text-center md:text-[16px]">
                Your product listing will be displayed on the platform{" "}
                <a
                  href="https://klick.africa"
                  target="_blank"
                  style={{ color: "#ff6b3c", textDecoration: "underline" }}
                >
                  Klick
                </a>{" "}
                after a quick online verification process conducted by our team.
              </p>
            </div>
            <div className="bg-white flex items-center  gap-3 flex-col py-6 md:px-5 px-4">
              <img
                src="/percel.svg"
                alt="How to sell"
                className="md:w-[3rem] w-[2rem]"
              />
              <h3 className="md:text-[18px] text-[18px] uppercase font-semibold">
                PACK YOUR PRODUCT
              </h3>
              <p className="text-[#6A6B6C] text-center md:text-[16px]">
                Keep your product ready by following our packaging guidelines.
                We offer both collection and drop off options for your package.
                Klick will handle the final delivery to the customer in order to
                help maintain your anonymity and safety 
              </p>
            </div>
            <div className="bg-white flex items-center  gap-3 flex-col py-6 md:px-5 px-4">
              <img
                src="/cash.svg"
                alt="How to sell"
                className="md:w-[3rem] w-[2rem]"
              />
              <h3 className="md:text-[18px] text-[18px] uppercase font-semibold">
                GET PAID
              </h3>
              <p className="text-[#6A6B6C] text-center md:text-[16px]">
                Once the product reaches its new home, your payment will be
                deposited in your bank account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
