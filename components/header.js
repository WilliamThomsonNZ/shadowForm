import React, { useEffect, useState } from 'react'
import Image from "next/image";
const Header = () => {
    const [pageSize, setPageSize] = useState(0)
    useEffect(() => {
        let box = document.querySelector(".box");
        let boxBoundingRect = box.getBoundingClientRect();
        let boxCenter = {
            x: boxBoundingRect.left + boxBoundingRect.width / 2,
            y: boxBoundingRect.top + boxBoundingRect.height / 2
        };
        document.addEventListener("mousemove", e => {
            let angle = Math.atan2(e.pageX - boxCenter.x, - (e.pageY - boxCenter.y)) * (180 / Math.PI);
            box.style.transform = `rotate(${angle + 65}deg)`;
        })
    }, [])


    return (
        <header className={"pt-[80px] md:pt-[100px] lg:pt-[136px] px-[26px] md:mx-[26px] xl:mx-auto lg:max-w-[1300px] "}>
            <div className={"gradientTop"}></div>
            <div className={"flex items-center justify-center w-full lg:justify-between"}>
                <div className={"flex flex-col md:flex-row gap-x-[45px] items-center justify-center"}>
                    <h1 className={"headingText text-[50px] tracking-[1.7px] flex gap-[7px] lg:text-[80px]"}>
                        <span className={"gradientTextGrey"}>Shadow</span>
                        <span className={"gradientTextGrey"}>Labs</span>
                    </h1>
                    <h2 className={"text-[17px] mxl:text-[19px] pl-[15px] text-accent-1 tracking-[1.37px] font-bold  headerCurrentPage h-fit bodyText lg:text-[19px]"}>Our Formula. Your Future.</h2>
                </div>
                <div className={"box eye"}>
                    <Image src={'/imgs/eye.png'} alt={"shadow labs branding asset"} className={"hidden lg:block"} width={100} height={100} />
                </div>
            </div>
        </header>
    )
}

export default Header