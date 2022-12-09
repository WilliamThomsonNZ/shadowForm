import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image"
const Footer = () => {
    return (
        <footer className={"bg-[#242424] px-[26px] mt-[30px] pt-[30px] lg:mt-[80px]"}>
            <div className={"flex w-full justify-between items-center"}>
                <div>
                    <div className={"flex flex-col"}>
                        <span className={"text-[15px] text-white block mb-2.5"}>
                            Social
                        </span>
                        <a href={""} target="_blank" rel="noreferrer" className={"text-[19px] text-accent-1"}><FontAwesomeIcon icon={faTwitter} className={"h-[19px] lg:h-6"} /></a>
                    </div>
                    <h6 className={"hidden headingText text-[50px] tracking-[1.7px]  gap-[7px]"}>
                        <span className={"gradientTextGrey"}>
                            SHADOW
                        </span>
                        <span className={"gradientTextGrey"}>
                            LABS
                        </span>
                    </h6>
                </div>
                <div className={"w-[70px]"}>
                    <Image src={"/imgs/light.png"} width={120} height={153} />
                </div>
            </div>
            <h6 className={"headingText text-[70px] tracking-[1.7px] flex gap-[7px] mb-[30px]"}>
                <span className={"gradientTextGrey"}>
                    SHADOW
                </span>
                <span className={"gradientTextGrey"}>
                    LABS
                </span>
            </h6>
            <div className={"gradientLine"}></div>
            <span className={"bodyText text-accent-1 text-[12px] text-right block mt-6 pb-6"}>Copyright © 2022 ShadowLabs B.V. All rights reserved.</span>
        </footer>
    )
}

export default Footer