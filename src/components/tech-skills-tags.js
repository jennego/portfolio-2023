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

export const tagsWithIcons = (catArray, size) => {
  let iconArray = []

  catArray.map(category => {
    switch (category) {
      case "HTML":
        iconArray.push([faHtml5, "HTML"])
        break
      case "WordPress":
        iconArray.push([faWordpress, "WordPress"])
      case "CSS":
        iconArray.push([])

      default:
        return
    }
  })

  console.log(iconArray)

  return (
    <div>
      {iconArray.map(icon => (
        <span className="category-tag">
          {icon[0] ? <FontAwesomeIcon icon={icon[0]} /> : ""} {icon[1]}
        </span>
      ))}
    </div>
  )
}

// switch case to assign icons?
// or transform array with icon uni codes
