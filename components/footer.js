import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"
const Footer = () => {
    return (
        <div className={"relative"}>
            <div className={"gradientFooter hidden lg:block z-[0]"}></div>
            <footer className={"bg-[#242424] px-[26px] mt-[30px] pt-[30px] lg:mt-[80px] lg:pt-[82px] relative z-[10]"}>
                <div className={"md:mx-[26px] xl:mx-auto lg:max-w-[1300px]"}>
                    <div className={"flex w-full justify-between items-center lg:pb-[72px]"}>
                        <div className={"lg:flex flex-row-reverse items-center gap-x-[72px]"}>
                            <div className={"lg:flex items-end gap-x-6"}>
                                <div className={"flex flex-col lg:gap-y-6"}>
                                    <span className={"text-[15px] text-white block mb-2.5 font-bold  bodyText lg:text-[18px] lg:leading-none lg:mb-0"}>
                                        Social
                                    </span>
                                    <a href={"https://twitter.com/ShadowLabsNFT"} target="_blank" rel="noreferrer" className={"text-[19px] text-accent-1"}><FontAwesomeIcon icon={faTwitter} className={"h-[19px] lg:h-6"} /></a>
                                </div>
                                <a href="mailto:Info@shadow-labs.xyz" className={"text-[15px] text-white block mt-4 font-bold  bodyText lg:text-[18px] lg:leading-none lg:m-0"}>Info@shadow-labs.xyz</a>
                            </div>

                            <h6 className={"hidden headingText text-[105px] tracking-[1.9px]  gap-[7px] lg:block lg:leading-none"}>
                                <span className={"gradientTextGrey"}>
                                    SHADOW
                                </span>
                                <span className={"gradientTextGrey"}>
                                    LABS
                                </span>
                            </h6>
                        </div>
                        <div className={"w-[70px] lg:w-[100px]"}>
                            <Image src={"/imgs/light.png"} width={120} height={153} />
                        </div>
                    </div>
                    <h6 className={"headingText text-[20vw] tracking-[1.7px] flex gap-[7px] mb-[30px] lg:hidden"}>
                        <span className={"gradientTextGrey"}>
                            SHADOW
                        </span>
                        <span className={"gradientTextGrey"}>
                            LABS
                        </span>
                    </h6>
                    <div className={"gradientLineFooter"}></div>
                    <span className={"bodyText text-accent-1 text-[12px] text-right block mt-6 pb-6 lg:mt-[45px] lg:text-4 lg:pb-[65px]"}>Copyright © 2022 ShadowLabs B.V. All rights reserved.</span>
                </div>
            </footer>
        </div>

    )
}

export default Footer