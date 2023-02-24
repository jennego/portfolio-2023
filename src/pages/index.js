import * as React from "react"
import { useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import FrontPage from "../components/sections/front"
import Portfolio from "../components/sections/portfolio"
import "flexboxgrid/dist/flexboxgrid.min.css"
import About from "../components/sections/about"
import Nav from "../components/nav"
import SideNav from "../components/SideNav"
import AOS from "aos"
import "aos/dist/aos.css"

const IndexPage = ({ pageContext }) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Layout>
      <Nav />
      <SideNav />
      <FrontPage />
      <div>
        <ul>
          <li> Or cutouts? Animate inside</li>
          <li>
            {" "}
            Maybe just a shape, masked text inside, other info in regular text
          </li>
          <li>Name centered</li>
          <li>portfolio</li>
          <li>about</li>
        </ul>
      </div>
      <Portfolio />
      <About />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
