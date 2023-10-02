import * as React from "react"
import { useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BLOCKS } from "@contentful/rich-text-types"

const fadeVariant = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
}

const containerVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren", //use this instead of delay
      staggerChildren: 0.2, //apply stagger on the parent tag
    },
  },
  hidden: {
    opacity: 0,
  },
}

const childParagraphVariant = {
  hidden: {
    x: -10, //move out of the site
    opacity: 0,
  },
  visible: {
    x: 0, // bring it back to normal
    opacity: 1,
  },
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

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <motion.p variants={childParagraphVariant}>{children}</motion.p>
      ),
    },
  }

  const text = data.allContentfulSiteInfo.edges[0].node.aboutRt

  return (
    <div id="about" className="section section-padding">
      <motion.div variants={fadeVariant} initial="hidden" animate={control}>
        <h2 className="heading">About</h2>
      </motion.div>

      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={control}
        ref={ref}
      >
        {renderRichText(text, options)}
      </motion.div>
    </div>
  )
}

export default About
