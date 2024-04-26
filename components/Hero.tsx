"use client"
import { Carousel, Image } from "antd"
import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { CustomButton } from "./CustomButton"

export const Hero = () => {
    useGSAP(() => {
        gsap.from(".reveal-down", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power4.out",
            delay: 0.5,
        })
        gsap.from(".reveal", {
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "power4.out",
            delay: 0.5,
        })
    }, [])
    return (
        <div className="bg-[#00A3E0]/10 md:min-h-[60vh] md:py-[0rem] py-8 pt-9 mb-5 md:mb-[2rem] relative overflow-hidden z-[10]" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className="w-[93%] mx-auto md:w-[90%] lg:w-[80%] 3xl:w-[70%] flex flex-col-reverse md:flex-row justify-center items-center gap-4" style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <div className="md:w-[50%] overflow-hidden relative z-[10] text-center md:text-start">
                    <h2 className="font-semibold md:text-[48px] lg:text-[70px] text-[24px] lg:leading-[74px] pb-[1rem] md:pb-[2rem] text-secondary overflow-hidden reveal-down">
                        When selling is all about saving
                    </h2>
                    <p className="lg:text-[32px] lg:leading-[38px] md:text-[24px] overflow-hidden reveal-down mb-5">
                        We help you find a new home for all the stuff your kids outgrow.
                        Nothing goes to waste, and you get paid too!
                    </p>
                    <div className="reveal-down">
                        <Link href="#sell-with-us">
                            <CustomButton>Get Started</CustomButton>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block md:w-[50%] md:h-[100%] flex justify-center items-center ">
                    <div style={{ width: "75%" }}>
                        <Carousel autoplay style={{ width: "100%", height: "100%", borderRadius: '20px' }} className="overflow-hidden">
                            <Image
                                alt="Girl"
                                style={{ borderRadius: '30px' }}
                                src="/klick_preloved_1.png"
                                preview={false}
                            />
                            <Image
                                alt="Girl"
                                style={{ borderRadius: '30px' }}
                                src="/klick_preloved.png"
                                preview={false}
                            />
                        </Carousel>
                    </div>
                </div>
                <div className="absolute bottom-[20%] left-[-30%] md:block hidden">
                    <img src="/butterfly.svg" alt="Hero" />
                </div>
            </div>
            <div className="absolute top-[10%] right-[40%] md:block hidden reveal">
                <img src="/butterfly.svg" alt="Hero" />
            </div>
            <div className="absolute top-[14%] left-[8%] md:block hidden reveal">
                <img src="/butterfly.svg" alt="Hero" />
            </div>
            <div className="absolute bottom-[10%] right-[5%] md:block hidden reveal">
                <img src="/butterfly.svg" alt="Hero" />
            </div>
            <div className="absolute bottom-[10%] left-[25%] md:block hidden reveal">
                <img src="/butterfly.svg" alt="Hero" />
            </div>
        </div>
    )
}
