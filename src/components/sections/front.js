import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import AOS from "aos"
import "aos/dist/aos.css"

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
          <h1 className="title" data-aos="fade-up">
            Jennifer Chow
          </h1>
        </div>
        <br />
        <p>match it, animation? greyscale and stylize photo </p>
      </div>
    </div>
  )
}

export default FrontPage
