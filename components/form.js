import React, { useState } from 'react'
import TextInput from './textInput'
import Dropdown from './dropdown';
import TextArea from "./textArea";
const Form = () => {
    const [email, setEmail] = useState("");
    const [discord, setDiscord] = useState("");
    const [twitter, setTwitter] = useState("");
    const [budget, setBudget] = useState("")
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");


    function handleFormSubmission(e) {
        e.preventDefault();
    }

    return (
        <form className={"backgroundGradient px-[26px] pt-[20px] pb-[40px] mt-[60px] rounded-[15px]  md:mx-[26px] xl:mx-auto lg:max-w-[1300px] lg:mt-[100px] lg:pt-[80px] lg:rounded-[50px] lg:pb-[80px]"}>
            <div className={"max-w-[650px] mx-auto"}>
                <div>
                    <h2 className={"headingText text-accent-1 text-[80px] text-center lg:text-[140px] leading-none mb-[15px] lg:mb-[30px]"}>LET'S BUILD</h2>
                </div>
                <h6 className={"bodyText text-white font-medium text-center text-[14px] tracking-[1.2px] mb-[30px] lg:text-[19px] lg:mb-[70px]"}>/Tell us a little bit about yourself and your idea's</h6>
                <TextInput name={"email"} label={"Email"} value={email} placeholder={"JohnDoe@gmail.com"} cb={(e) => setEmail(e.target.value)} />
                <div className={"lg:flex justify-between lg:gap-x-[25px]"}>
                    <TextInput name={"discord"} label={"Discord"} value={discord} placeholder={"JohnDoe #8940"} cb={(e) => setDiscord(e.target.value)} />
                    <TextInput name={"email"} label={"Twiiter Handle"} value={twitter} placeholder={"@JohnDoe"} cb={(e) => setTwitter(e.target.value)} />
                </div>
                <Dropdown />
                <TextInput name={"budget"} label={"Project Budget"} value={budget} placeholder={"Amount in Dollars or Ethereum"} cb={(e) => setBudget(e.target.value)} />
                <div className={"gradientLine mb-[25px] lg:mb-[30px]"}></div>
                <TextArea value={answer1} quesiton={"Great question number 1"} cb={(e) => setAnswer1(e.target.value)} />
                <TextArea value={answer2} quesiton={"Great question number 2"} cb={(e) => setAnswer2(e.target.value)} />
                <TextArea value={answer3} quesiton={"Great question number 3"} cb={(e) => setAnswer3(e.target.value)} />
                <div className={"w-full flex justify-end mt-[30px]"}>
                    <button className={"bg-accent-1 border-[1px] border-accent-1 bodyText tracking-[1.2px] py-3 px-7 rounded-[15px] shadow-[0px_0px_36px_#00D15278] whitespace-nowrap font-medium lg:px-10 lg:py-4 lg:text-[21px] lg:rounded-[20px]"} onClick={handleFormSubmission}>Send info</button>
                </div>
            </div>
        </form>
    )
}

export default Form