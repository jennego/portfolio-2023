import React from "react"
import { AnimatePresence } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <AnimatePresence wait>{element}</AnimatePresence>
)

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
