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
              gatsbyImageData(
                height: 300
                width: 400
                aspectRatio: 1.5
                layout: FULL_WIDTH
              )
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

      <div className="content">
        <div className="row">
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <>
              <div className="col-xs-12 col-sm-6 col-lg-4 portfolio-item">
                <div>
                  <GatsbyImage
                    image={node.mainPhoto.gatsbyImageData}
                    imgClassName="portfolio-image"
                  />
                </div>
                <div className="portfolio-item-hover">
                  <h2> {node.name}</h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
