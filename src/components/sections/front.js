import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const FrontPage = () => {
  return (
    <div id="home">
      <div className="image-container">
        <StaticImage
          src="../../images/ray-grey.jpg"
          objectFit="cover"
          layout="fullWidth"
          className="gatsby-ray"
          alt="Horse"
        />
      </div>
      <div className="title-screen">
        <div className="title-text-group">
          <h1 className="title">Jennifer Chow</h1>
        </div>
        <br />
        <p>Web Developer</p>

        <div style={{ paddingTop: "2rem" }}>
          <FontAwesomeIcon icon={faArrowDown} size="2x" />
        </div>
      </div>
    </div>
  )
}

export default FrontPage
