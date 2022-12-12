import React from 'react'

const TextInput = ({ name, label, cb, placeholder, value, }) => {
    return (
        <div className={"bg-darkGrey w-full rounded-[18px] py-3 px-4 mb-[25px] lg:mb-[30px] lg:py-5 lg:px-7"}>
            <label className={`font-medium bodyText mb-1  block text-[12px] ${value !== "" ? "text-[#4D4E4E]" : "text-white"} formLabel lg:text-[14px]`}>{label}</label>
            <input
                className={`bg-darkGrey font-medium text-[17px] tracking-[1.2px] w-full bodyText text-white focus:outline-none placeholder:text-[#4D4E4E] caret-accent-1 lg:text-[21px] lg:tracking-[1.51px]`}
                value={value} type={"text"} placeholder={placeholder} name={name} onChange={(e) => cb(e)} />
        </div>
    )
}

export default TextInput