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
    </div>
  )
}

export default SideNav
