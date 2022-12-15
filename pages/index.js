import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/header"
import Form from "../components/form"
import Footer from "../components/footer"
import { motion } from "framer-motion"
export default function Home() {
  const pageVars = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1.4,
      }
    }
  }

  return (
    <div className={"bg-background overflow-x-hidden"}>
      <Head>
        <title>Shadow Labs</title>
        <meta name="description" content="Shadow Labs - Our Formula. Your Future." />
        <link rel="icon" href="/imgs/favicon.png" />
      </Head>
      <motion.main variants={pageVars} initial={"initial"} animate={"animate"}>
        <Header />
        <Form />
        <div className={"w-full flex items-center justify center flex-col mt-[40px] lg:mt-[60px]"}>
          <span className={'block text-accent-1 rotate-180 text-[25px] leading-none lg:text-[39px]'}>v</span>
          <span className={'block text-accent-1 rotate-180 text-[25px] leading-none  lg:text-[39px]'}>v</span>
        </div>
        <Footer />
      </motion.main>
    </div>
  )
}
