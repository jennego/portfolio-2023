import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulSiteInfo {
        edges {
          node {
            image {
              gatsbyImageData(height: 300, width: 400, aspectRatio: 1.5)
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h2>About</h2>
      <p> Front-end Dev. Horse lover.Equestrian. Weirdo.</p>
      <GatsbyImage
        image={data.allContentfulSiteInfo.edges[0].node.image.gatsbyImageData}
        className="portfolio-image"
      />
    </div>
  )
}

export default About
