import React from "react"
import { Link } from "gatsby"
import ContactForm from "../contact-form"
import SocialMedia from "../socialmedia"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

const Contact = () => {


  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  const fadeVariant = {
  visible: {
    opacity: 1,
      transition: {
        duration: 0.3 ,
        delay: 1,
      },

  },
  hidden: {
    opacity: 0,
  },
}



  return (
    <div id="contact" className="section section-padding">

      <h1 className="heading">Contact </h1>
      <SocialMedia size={'xl'} />



    <motion.div variants={fadeVariant} initial="hidden" animate={control}  ref={ref}  >

      <ContactForm />
      </motion.div>  
    </div>
  )
}

export default Contact
