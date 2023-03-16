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
import Contact from "../components/sections/contact"
import ShortIntro from "../components/sections/short-intro"
import { useScrollRestoration } from "gatsby"

const IndexPage = ({ pageContext }) => {
  const pageScrollRestoration = useScrollRestoration(`scroll-position`)
  return (
    <Layout {...pageScrollRestoration}>
      <Nav />
      <SideNav />
      <FrontPage />
      <ShortIntro />
      <Portfolio />
      <About />
      <Contact />
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
