import React from "react"
import ScrollSpy from "react-scrollspy-navigation"

const SideNav = () => {
  return (
    <div className="side-nav-container">
      <div className="side-nav">
        <ScrollSpy>
          Just use bullet nav!!
          <a href="#home" ref={React.createRef()}>
            Home
          </a>
          <a href="#portfolio" ref={React.createRef()}>
            Portfolio
          </a>
          <a href="#about" ref={React.createRef()}>
            About
          </a>
        </ScrollSpy>
      </div>
    </div>
  )
}

export default SideNav
