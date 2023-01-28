import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"

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

  const text = data.allContentfulSiteInfo.edges[0].node.aboutRt
  return (
    <div id="about">
      <h2>About</h2>
      <p> Front-end Dev. Horse lover.Equestrian. Weirdo.</p>
      {renderRichText(text)}
    </div>
  )
}

export default About
