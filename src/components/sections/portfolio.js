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
            shortDescription
            categories
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
              <div
                className="col-xs-12 col-sm-6 col-lg-4 portfolio-item"
                key={node.id}
              >
                <div>
                  <div className="portfolio-name-bar">
                    <h2 className="portfolio-name-title"> {node.name}</h2>
                  </div>
                  <GatsbyImage
                    image={node.mainPhoto.gatsbyImageData}
                    className="portfolio-image"
                  />
                  <div></div>
                </div>
                <div className="portfolio-item-hover">
                  <div className="overlay-content">
                    <h2 className="portfolio-item-name"> {node.name}</h2>
                    <p className="portfolio-item-description">
                      {node.shortDescription}
                    </p>
                    <p>{node.categories}</p>
                  </div>
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
