import React, { useState } from 'react'

const Dropdown = () => {
    const options = ["Developer", "Artist", "Founder", "Alpha Caller", "Project Manager", "Brand Manager"];
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedRoles, setSelectedRoles] = useState([]);

    function handleOptionClick(e, value) {
        e.preventDefault();
        if (selectedRoles.includes(value)) {
            let newRoles = selectedRoles.filter(role => role != value ? true : false);
            console.log(newRoles);
            setSelectedRoles(newRoles);
            return
        }
        if (selectedRoles.length == 2) return;
        const oldRoles = [...selectedRoles, value];
        setSelectedRoles(oldRoles);
    }





    return (
        <div className={`bg-darkGrey transitionEnabled rounded-[18px] py-3 px-4 mb-[25px] overflow-hidden ${dropdownOpen ? "border-[1px] border-accent-1 h-[440px] lg:h-[520px]" : "border-[1px] border-darkGrey h-[68px] lg:h-[75px]"} lg:mb-[30px] lg:py-5 lg:px-7 `}>
            <button className={"w-full flex justify-between items-center text-[17px] tracking-[1.2px] bodyText font-medium text-[#4D4E4E]"} onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(!dropdownOpen)
            }}>
                <span className={`transitionEnabled text-[16px] text-left ${dropdownOpen ? "text-accent-1" : selectedRoles.length > 0 ? "text-white" : ""} lg:text-[21px] lg:tracking-[1.51px]`}>{selectedRoles.length > 0 ? selectedRoles.join(", ") : "Select your role. Max 2."}</span>
                <span className={`block bg-[#3B3B3B] py-[6px] text-white px-4 rounded-[10px] transitionEnabled ${dropdownOpen ? "rotate-180" : ""}`}>v</span>
            </button>
            <div className={"mt-5 lg:mt-8"}>
                {options.map(option => <button className={`block  text-left transitionEnabled px-4 py-3 rounded-[11px] mb-2 font-medium text-[17px] tracking-[1.2px] w-full bodyText ${selectedRoles.includes(option) ? "bg-accent-1 text-background" : "bg-lightGrey text-white"} lg:text-[21px] lg:tracking-[1.51px] lg:mb-3`} key={option} onClick={(e) => handleOptionClick(e, option)}>{option}</button>)}
            </div>
        </div >
    )
}

export default Dropdown