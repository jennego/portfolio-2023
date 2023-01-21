import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const FrontPage = () => {
  return (
    <div id="home">
      <h1>Make png with name in transparent cutout!! </h1>
      <div className="image-container">
        <StaticImage
          src="../../images/ray.jpg"
          objectFit="cover"
          layout="fullWidth"
          className="gatsby-ray"
        />
      </div>
      <div className="title-screen">
        <div class="title-text-group">
          <h1 className="title">Jennifer Chow</h1>
        </div>
        <br />
        <p>match it, animation? greyscale and stylize photo </p>
      </div>
    </div>
  )
}

export default FrontPage
