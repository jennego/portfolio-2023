import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"

const NotFoundPage = () => (
  <Layout>
    <Nav />
    <h1>404: Not Found</h1>
    <p>Page doesn't exist</p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
