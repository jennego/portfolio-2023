import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import FrontPage from "../components/sections/front"
import Portfolio from "../components/sections/portfolio"
import "flexboxgrid/dist/flexboxgrid.min.css"

const IndexPage = () => (
  <Layout>
    <FrontPage />
    <div>
      <ul>
        <li>large stylized image w/ some animation?</li>
        <li> Or cutouts? Animate inside</li>
        <li>Name centered</li>
        <li>portfolio</li>
        <li>about</li>
      </ul>
    </div>
    <Portfolio />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
