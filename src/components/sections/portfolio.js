import * as React from "react"
import { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

  const containerVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren", //use this instead of delay
        staggerChildren: 0.2, //apply stagger on the parent tag
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const itemVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "linear",
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
    },
  }

  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <div id="portfolio">
      <h2 className="heading">Portfolio</h2>

      <div className="content">
        <motion.div
          className="row"
          variants={containerVariant}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          {data.allContentfulPortfolio.edges.map(({ node }) => (
            <motion.div
              variants={itemVariant}
              key={node.id}
              className="col-xs-12 col-sm-6 col-lg-4 portfolio-item"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
