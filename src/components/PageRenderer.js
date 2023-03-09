import React from "react"
import Project from "../templates/project"

// import * as projectsJSON from "../../../public/page-data/projects/punnet-ponies/page-data.json"

// interface PageRendererProps {
//   match: {
//     route: {
//       path: string,
//     },
//     params: {
//       [key: string]: string,
//     },
//     uri: string,
//   };
// }

const PageRenderer = ({ match }) => {
  switch (match.route.path) {
    case "/portfolio/:slug/":
      return <Project data={"hi"} />

    default:
      return null
  }
}

export default PageRenderer
