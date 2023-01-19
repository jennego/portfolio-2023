import React from "react"
import ScrollSpy from "react-scrollspy-navigation"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <div className="navigation">
      <ScrollSpy>
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
  )
}

export default Nav
