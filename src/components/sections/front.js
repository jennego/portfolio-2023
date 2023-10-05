import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { gsap } from "gsap"
import ScrollSpy from "react-scrollspy-navigation"

const FrontPage = () => {
  const handleClick = e => {
    gsap.registerPlugin(ScrollToPlugin)
    gsap.to(window, { duration: 2, scrollTo: 900 })

    console.log("i am going to scroll")
  }

  return (
    <div className="section">
      <div id="home">
        <div className="image-container">
          <StaticImage
            src="../../images/ray.jpg"
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
          <p>Web Developer</p>

          <div style={{ paddingTop: "1rem" }}>
            <a
              onClick={handleClick}
              ref={React.createRef()}
              className="clickable-icon"
            >
              <FontAwesomeIcon icon={faArrowDown} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FrontPage
