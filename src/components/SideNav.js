import React from "react"
import ScrollSpy from "react-scrollspy-navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faCircle as faCircleOutline } from "@fortawesome/free-regular-svg-icons"

const SideNav = () => {
  return (
    <div className="side-nav-container">
      <ScrollSpy className="bullet-active">
        <a href="#home" ref={React.createRef()}>
          <div className="bullet-item">
            <div className="bullet-reg">
              <FontAwesomeIcon icon={faCircleOutline} />
            </div>
          </div>
        </a>

        <a href="#portfolio" ref={React.createRef()}>
          <div className="bullet-item">
            <div className="bullet-reg">
              <FontAwesomeIcon icon={faCircleOutline} />
            </div>
          </div>
        </a>

        <a href="#about" ref={React.createRef()}>
          <div className="bullet-item">
            <div className="bullet-reg">
              <FontAwesomeIcon icon={faCircleOutline} />
            </div>
          </div>
        </a>
      </ScrollSpy>

      {/* <div className="side-nav">
        <ScrollSpy className="bullet-active">
          Just use bullet nav!!
          <a href="#home" ref={React.createRef()}>
            <FontAwesomeIcon icon={faCircle} />
          </a>
          <a href="#portfolio" ref={React.createRef()}>
            <FontAwesomeIcon icon={faCircleOutline} />
          </a>
          <a href="#about" ref={React.createRef()}>
            <FontAwesomeIcon icon="fa-solid fa-circle" />
          </a>
        </ScrollSpy>
      </div> */}
    </div>
  )
}

export default SideNav
