import React from "react"
import IndexPage from "../pages"
import * as PortfolioPageJSON from "../../public/page-data/index/page-data.json"

interface PageRendererProps {
  match: {
    route: {
      path: string
    }
    params: {
      [key: string]: string
    }
    uri: string
  }
}

const PageRenderer = ({ match }: PageRendererProps) => {
  switch (match.route.path) {
    case "/":
      return <IndexPage data={PortfolioPageJSON?.result?.data} />

    default:
      return null
  }
}

export default PageRenderer
