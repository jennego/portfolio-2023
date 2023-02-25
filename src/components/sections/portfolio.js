import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// anilink does not work

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        edges {
          node {
            id
            name
            slug
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
    <div id="portfolio">
      <h2 className="heading">Portfolio</h2>

      <div className="content">
        <div className="row">
          {/* <AniLink cover to="page-4">
            Go to Page 4
          </AniLink> */}
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <React.Fragment key={node.id}>
              <div
                className="col-xs-12 col-sm-6 col-lg-4 portfolio-item"
                key={node.id}
              >
                <Link fade to={`/projects/${node.slug}`}>
                  <div>
                    <div className="portfolio-name-bar">
                      <h2 className="portfolio-name-title"> {node.name}</h2>
                    </div>
                    <GatsbyImage
                      image={node.mainPhoto.gatsbyImageData}
                      className="portfolio-image"
                      alt={`${node.name} screenshot`}
                    />
                  </div>
                  <div className="portfolio-item-hover">
                    <div className="overlay-content">
                      <h2 className="portfolio-item-name"> {node.name}</h2>
                      <p className="portfolio-item-description">
                        {node.shortDescription}
                      </p>
                      <p className="portfolio-cat">
                        {node.categories.toString().replaceAll(",", ", ")}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
