import * as React from "react"
import { useEffect } from "react"
import { graphql, Link } from "gatsby"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import {
  faXmark,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptop,
  faTag,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons"
import { tagsWithIcons, tagMapToIcons } from "../components/tech-skills-tags"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

export const query = graphql`
  query projectQuery($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      id
      name
      slug
      projectDate(formatString: "MMMM D, YYYY")
      projectUrl
      shortDescription
      githubUrl
      categories
      type
      techSkills
      otherSkills
      mainPhoto {
        filename
        gatsbyImageData(layout: FULL_WIDTH)
      }
      longDescriptionRt {
        raw
      }
      gallery {
        gatsbyImageData(height: 500, placeholder: BLURRED)
      }
    }
  }
`

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

const itemVariant = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "linear",
    },
  },
  hidden: {
    opacity: 0,
    x: -10,
  },
}

const fadeVariant = {
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const skillItem = (title, icon, content) => (
  <li className="skill-item">
    <span style={{ paddingRight: "0.5rem" }}>
      <FontAwesomeIcon icon={icon} className="skill-icon" />
      <strong>{title}:</strong>
    </span>
    {content.toString().replaceAll(",", ", ")}
  </li>
)

//  node.categories.toString().replaceAll(",", ", ")

const Project = ({ location, data, pageContext }) => {
  const project = data.contentfulPortfolio

  let tags = tagMapToIcons(data.contentfulPortfolio.categories).toString()

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.div
      variants={fadeVariant}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
    >
      {/* <motion.div
        variants={slideCoverVariant}
        initial="hidden"
        animate="visible"
        className="trans-cover"
      ></motion.div> */}
      <div className="top-row">
        <h1>{project.name}</h1>
        <a onClick={e => (location.state ? navigate(-1) : navigate("/"))}>
          <div className="exit">
            <FontAwesomeIcon icon={faXmark} size="3x" className="exit-icon" />
          </div>
        </a>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <GatsbyImage
            image={project.mainPhoto.gatsbyImageData}
            alt={project.mainPhoto.filename}
          />
        </div>

        <div className="infobox col-sm-12 col-md-4">
          <ul>
            <li>
              <strong>{project.name}</strong>
            </li>
            <li>Date: {project.projectDate}</li>
            <li>Type: {project.type}</li>
            <li>{project.shortDescription}</li>
            {project.techSkills
              ? skillItem("Tech Skills", faLaptop, project.techSkills)
              : ""}
            {project.otherSkills
              ? skillItem(
                  "Other Skills",
                  faWandMagicSparkles,
                  project.otherSkills
                )
              : ""}
            <li>Github: {project.githubUrl ? project.githubUrl : ""} </li>
            <li>Project: {project.projectUrl ? project.projectUrl : ""} </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-10 col-lg-8">
          {tags}
          <div className="project-long-text">
            {renderRichText(project.longDescriptionRt)}
          </div>
          {/* <motion.div
            className="row"
            variants={containerVariant}
            initial="hidden"
          > */}
          {project.gallery
            ? project.gallery.map(image => (
                <motion.div
                  variants={fadeVariant}
                  key={image.id}
                  ref={ref}
                  animate={control}
                  initial="hidden"
                >
                  <h2>{`Header inside viewport ${inView}.`}</h2>
                  <GatsbyImage image={image.gatsbyImageData} />
                </motion.div>
              ))
            : ""}
          {/* </motion.div> */}
        </div>
      </div>

      <div className="project-nav-container">
        <div className="row project-nav">
          <div>
            {pageContext.prev ? (
              <Link to={`/projects/${pageContext.prev.slug}`}>
                {" "}
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
          <div>
            {" "}
            <Link to="/">Go Back to Main Site</Link>
          </div>
          <div>
            {pageContext.next ? (
              <Link to={`/projects/${pageContext.next.slug}`}>
                {" "}
                <FontAwesomeIcon icon={faArrowRight} size="2x" />{" "}
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
