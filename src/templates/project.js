import * as React from "react"
import { graphql, Link } from "gatsby"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { motion } from "framer-motion"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLaptop,
  faTag,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons"
import { tagsWithIcons } from "../components/tech-skills-tags"

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

const skillItem = (title, icon, content) => (
  <li className="skill-item">
    <span style={{ paddingRight: "0.5rem" }}>
      <FontAwesomeIcon icon={icon} className="skill-icon" />
      <strong>{title}:</strong>
    </span>
    {content} gfghcc hfhmfhtfgndhgfgngn hfmyfyfmyffgmhghgvh fmhfhgfh
  </li>
)

const Project = ({ data, pageContext }) => {
  const project = data.contentfulPortfolio

  let tags = tagsWithIcons(data.contentfulPortfolio.categories)

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
      <div className="row">
        <div>Back</div>
        <div>Home</div>
        <div>Next</div>
      </div>
    </motion.div>
  )
}

export default Project
