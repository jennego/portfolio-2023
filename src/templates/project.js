import * as React from "react"
import { graphql } from "gatsby"
import "flexboxgrid/dist/flexboxgrid.min.css"
import { GatsbyImage } from "gatsby-plugin-image"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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
        gatsbyImageData(height: 500)
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

const Project = ({ data, pageContext }) => {
  const project = data.contentfulPortfolio
  return (
    <div>
      <h1>{project.name}</h1>
      <div className="row">
        <div className="col-sm-12 col-md 8">
          <GatsbyImage image={project.mainPhoto.gatsbyImageData} />
        </div>

        <div className="col-sm-12 col-lg-4">
          <ul>
            <li>{project.name}</li>
            <li>{project.projectDate}</li>
            <li> {project.type}</li>
            <li>{project.shortDescription}</li>
            <li>{project.techSkills}</li>
            <li>{project.otherSkills ? project.otherSkills : ""}</li>
            <li>{project.githubUrl ? project.githubUrl : ""} </li>
            <li>{project.projectUrl ? project.projectUrl : ""} </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div>{renderRichText(project.longDescriptionRt)}</div>
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
    </div>
  )
}

export default Project
