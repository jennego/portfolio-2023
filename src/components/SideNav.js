import React from "react"
import ScrollSpy from "react-scrollspy-navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import { faCircle as faCircleOutline } from "@fortawesome/free-regular-svg-icons"

const SideNav = () => {
  return (
    <div className="side-nav-container">
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
