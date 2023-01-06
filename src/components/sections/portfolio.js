import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            mainPhoto {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h2 className="heading">Portfolio</h2>

      <p>hi</p>
      <p> hover with overlay (semi transparent or solid?)</p>
      <p>coloured borders? pattern</p>

      <div>
        <div className="row">
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <div className="col-xs-12 col-sm-6 col-lg-3">
              <GatsbyImage image={node.mainPhoto.gatsbyImageData} />
              {node.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
