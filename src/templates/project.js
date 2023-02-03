import * as React from "react"
import { graphql } from "gatsby"

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
      {console.log(pageContext.id)}
    </div>
  )
}

export default Project
