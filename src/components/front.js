import * as React from "react"
import Ray from "../images/posterize-ray-test.svg"
import { StaticImage } from "gatsby-plugin-image"

const FrontPage = () => {
  return (
    <div style={{ position: "relative", height: "50vh" }}>
      {/* <StaticImage
        src="../images/posterize-ray-test.svg"
        style={{ position: "absolute" }}
      /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <h1>Jennifer Chow</h1>
      </div>
    </div>
  )
}

export default FrontPage
