import React from "react"
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faWordpress,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { faGem } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { array } from "prop-types"

export const tagMapToIcons = catArray => {
  let iconArray = []

  catArray.map(category => {
    switch (category) {
      case "HTML":
        iconArray.push([faHtml5, "HTML"])
        break
      case "WordPress":
        iconArray.push([faWordpress, "WordPress"])
        break
      case "CSS":
        iconArray.push([faCss3, "CSS"])
        break
      case "React":
        iconArray.push([faReact, "React"])
        break
      case "Gatsby":
        iconArray.push([faReact, "Gatsby"])
        break
      case "Ruby on Rails":
        iconArray.push([faGem, "Ruby on Rails"])
        break

      default:
        iconArray.push([null, category])
        break
    }
  })

  return iconArray
}

export const tagsWithIcons = (iconArray, cssClass) =>
  iconArray.map(icon => (
    <span className={`category-tag ${cssClass}`}>
      {icon[0] ? <FontAwesomeIcon icon={icon[0]} /> : ""} {icon[1]}
    </span>
  ))

// switch case to assign icons?
// or transform array with icon uni codes
