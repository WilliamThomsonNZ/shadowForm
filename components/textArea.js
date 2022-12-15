import React, { useState, useRef, useEffect } from 'react'
const TextArea = ({ quesiton, cb, value, currentTextAreaOpen, setCurrent, index }) => {
    const [selected, setSelected] = useState(value != "" ? true : false);
    const ref = useRef(null)
    useEffect(() => {
        if (currentTextAreaOpen != index) {
            setSelected(false)
        }
    }, [currentTextAreaOpen])
    return (
        <div className={`bg-darkGrey transitionEnabled rounded-[18px] py-4 px-4 mb-[25px] overflow-hidden ${selected ? "border-[1px] border-accent-1 h-[300px]" : "border-[1px] border-darkGrey h-[58px] lg:h-[75px] "} lg:mb-[30px] lg:py-5 lg:px-7`}>
            <button className={"transitionEnabled font-medium w-full  text-left text-white bodyText text-[17px] tracking-[1.2px] lg:text-[21px] lg:tracking-[1.5px]"} onClick={(e) => {
                e.preventDefault();
                if (!selected) {
                    setTimeout(() => {
                        ref.current.focus();
                    }, 800)
                }
                setCurrent(index)
                setSelected(!selected)

            }}>
                {quesiton}
            </button>
            <textarea ref={ref} value={value} className={`bg-darkGrey w-full h-[90%] ${selected ? "overflow-auto" : "overflow-hidden"} focus:outline-none caret-accent-1 mt-2.5 text-white text-[17px] tracking-[1.2px] font-medium lg:tracking-[1.5px] lg:text-[21px] lg:mt-4`} onChange={e => cb(e)} />
        </div>
    )
}

export default TextArea