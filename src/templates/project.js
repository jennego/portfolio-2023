import * as React from "react"
import { graphql, Link } from "gatsby"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { motion } from "framer-motion"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const query = graphql`
  query projectQuery($id: String!) {
    contentfulPortfolio(id: { eq: $id }) {
      id
      name
      slug
      projectDate
      projectUrl
      shortDescription
      githubUrl
      categories
      type
      techSkills
      otherSkills
      mainPhoto {
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

const slideCoverVariant = {
  visible: {
    opacity: 1,
    x: 1500,
    transition: {
      x: { duration: 2 },
      delay: 0.3,
      type: "spring",
    },
  },
  hidden: {
    opacity: 0,
    x: 0,
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

const Project = ({ data, pageContext }) => {
  const project = data.contentfulPortfolio
  return (
    <motion.div variants={fadeVariant} initial="hidden" animate="visible">
      {/* <motion.div
        variants={slideCoverVariant}
        initial="hidden"
        animate="visible"
        className="trans-cover"
      ></motion.div> */}
      <div className="top-row">
        <h1>{project.name}</h1>
        <Link to="/">
          <div className="exit">
            <FontAwesomeIcon
              icon={faCircleXmark}
              size="2x"
              className="exit-icon"
            />
          </div>
        </Link>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <GatsbyImage image={project.mainPhoto.gatsbyImageData} />
        </div>

        <div className="infobox col-sm-12 col-md-4">
          <ul>
            <li>{project.name}</li>
            <li>Date: {project.projectDate}</li>
            <li>Type: {project.type}</li>
            <li>{project.shortDescription}</li>
            <li>Tech Skills: {project.techSkills}</li>
            <li>
              Other Skills: {project.otherSkills ? project.otherSkills : ""}
            </li>
            <li>Github: {project.githubUrl ? project.githubUrl : ""} </li>
            <li>Project: {project.projectUrl ? project.projectUrl : ""} </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-10 col-lg-8">
          <div className="project-long-text">
            {renderRichText(project.longDescriptionRt)}
          </div>
          {project.gallery
            ? project.gallery.map(image => (
                <div>
                  <GatsbyImage image={image.gatsbyImageData} />
                </div>
              ))
            : ""}
        </div>
      </div>
      {console.log(project.gallery)}
    </motion.div>
  )
}

export default Project
