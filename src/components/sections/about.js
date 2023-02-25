import * as React from "react"
import { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 5 } },
}

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSiteInfo {
        edges {
          node {
            aboutRt {
              raw
            }
          }
        }
      }
    }
  `)

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  const text = data.allContentfulSiteInfo.edges[0].node.aboutRt
  return (
    <div id="about">
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        <h2 className="heading">About</h2>
      </motion.div>
      <p> Front-end Dev. Horse lover.Equestrian. Weirdo.</p>
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        {renderRichText(text)}
      </motion.div>

      <motion.div
        className="box"
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}
      >
        <h1>Box </h1>
      </motion.div>
    </div>
  )
}

export default About
