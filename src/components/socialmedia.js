import React from "react"
import {
  faInstagram,
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialMedia = ({ size }) => (
  <div className="social-media">
    <a href="http://www.linkedin.com/in/jennego" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} size={size} />
    </a>
    <a href="http://www.instagram/thejennego.com" target="_blank">
      <FontAwesomeIcon icon={faInstagram} size={size} />
    </a>
    <a href="http://www.facebook.com/jennego" target="_blank">
      <FontAwesomeIcon icon={faFacebook} size={size} />
    </a>
    <a href="http://www.github.com/jennego" target="_blank">
      <FontAwesomeIcon icon={faGithub} size={size} />
    </a>
  </div>
)

export default SocialMedia
