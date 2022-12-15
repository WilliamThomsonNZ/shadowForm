import React, { useState, useRef } from 'react'
import TextInput from './textInput'
import Dropdown from './dropdown';
import TextArea from "./textArea";
import ReCAPTCHA from "react-google-recaptcha"
import Image from "next/image";
const Form = () => {
    const [email, setEmail] = useState("");
    const [discord, setDiscord] = useState("");
    const [twitter, setTwitter] = useState("");
    const [ethAddress, setEthAddress] = useState("")
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [loading, setLoading] = useState("");
    const [currentTextAreaOpen, setCurrentTextAreaOpen] = useState(0);
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [showRequiredError, setShowRequiredError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false)

    async function handleFormSubmission(e) {
        e.preventDefault();
        const fieldsPassed = checkFields();
        if (!fieldsPassed) return;
        if (!checkEmailValidation(email)) {
            setEmailError(true)

            return
        } else {
            setEmailError(false);
        }
        setLoading(true);
        // const token = captchaRef.current.getValue();
        // captchaRef.current.reset();
        try {
            const response = await fetch("/api/handle-form", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    discord,
                    twitter,
                    ethAddress,
                    selectedRoles,
                    answer1,
                    answer2,
                    answer3,
                })
            })
            const data = await response.json();
            console.log(data)
            setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false);
            }, 6000)
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    function checkFields() {
        if (!email || !discord || !twitter || !ethAddress || !selectedRoles || !answer1 || !answer2 || !answer3) {
            setShowRequiredError(true)
            return false
        } else {
            setShowRequiredError(false)
            return true;

        }
    }

    function checkEmailValidation(email) {
        const regex = /(.+)@(.+){2,}\.(.+){2,}/;
        const isValid = regex.test(email);
        return isValid;
    }



    return (
        <form className={"backgroundGradient px-[26px] pt-[20px] pb-[40px] mt-[60px] rounded-[15px]  md:mx-[26px] xl:mx-auto lg:max-w-[1300px] lg:mt-[100px] lg:pt-[80px] lg:rounded-[50px] lg:pb-[80px]"}>
            <div className={"max-w-[650px] mx-auto"}>
                <div className={"lg:flex items-end lg:mb-[30px] lg:gap-x-[30px]"}>
                    <h2 className={"headingText text-accent-1 text-[80px] text-center lg:text-[140px] leading-none mb-[15px] lg:mb-0"}>LET'S BUILD</h2>
                    <Image src={"/imgs/icon.png"} width={95} height={112} className={"hidden lg:block pb-3"} />
                </div>
                <h6 className={"bodyText text-white font-medium text-center text-[14px] tracking-[1.2px] mb-[30px] lg:text-[19px] lg:mb-[70px]"}>/Tell us a little bit about yourself and your idea's</h6>
                <TextInput name={"email"} label={"Email"} value={email} placeholder={"JohnDoe@gmail.com"} cb={(e) => setEmail(e.target.value)} />
                <div className={"lg:flex justify-between lg:gap-x-[25px]"}>
                    <TextInput name={"discord"} label={"Discord"} value={discord} placeholder={"JohnDoe #8940"} cb={(e) => setDiscord(e.target.value)} />
                    <TextInput name={"email"} label={"Twitter Handle"} value={twitter} placeholder={"@JohnDoe"} cb={(e) => setTwitter(e.target.value)} />
                </div>
                <Dropdown selectedRoles={selectedRoles} setSelectedRoles={(val) => setSelectedRoles(val)} />
                <TextInput name={"ethAddress"} label={"Ethereum Address"} value={ethAddress} placeholder={"0x0000000000000000"} cb={(e) => setEthAddress(e.target.value)} />
                <div className={"gradientLine mb-[25px] lg:mb-[30px]"}></div>
                <TextArea value={answer1} quesiton={"Great question number 1"} cb={(e) => setAnswer1(e.target.value)} currentTextAreaOpen={currentTextAreaOpen} setCurrent={(val) => setCurrentTextAreaOpen(val)} index={1} />
                <TextArea value={answer2} quesiton={"Great question number 2"} cb={(e) => setAnswer2(e.target.value)} currentTextAreaOpen={currentTextAreaOpen} setCurrent={(val) => setCurrentTextAreaOpen(val)} index={2} />
                <TextArea value={answer3} quesiton={"Great question number 3"} cb={(e) => setAnswer3(e.target.value)} currentTextAreaOpen={currentTextAreaOpen} setCurrent={(val) => setCurrentTextAreaOpen(val)} index={3} />
                <div className={"w-full flex justify-between items-center mt-[30px]"}>
                    <span className={"text-[16px] bodyText text-accent-1 lg:text-[21px] lg:tracking-[1.2px]"}>{showRequiredError ? "Please fill out all fields!" : emailError ? "Please enter a valid email address!" : showSuccess ? "Successfully submitted form!" : ""}</span>
                    <div>
                        {/* <ReCAPTCHA sitekey={"6Lc2fHEjAAAAAARf9trmLdWOCySGvFwEaFN5_8w5"} ref={captchaRef} theme={"dark"} /> */}
                        <button className={"bg-accent-1 border-[1px] border-accent-1 bodyText tracking-[1.2px] py-3 px-7 rounded-[15px] shadow-[0px_0px_36px_#00D15278] whitespace-nowrap font-medium lg:px-10 lg:py-4 lg:text-[21px] lg:rounded-[20px]"} onClick={handleFormSubmission}>{loading ?
                            (<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>) :
                            "Send info"}</button>
                    </div>


                </div>
            </div>
        </form>
    )
}

export default Form