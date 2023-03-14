import React, { useState } from "react"
import { motion, useAnimation } from "framer-motion"

export default function App() {
  const growVariant = {
    regular: {
      scale: 1,
    },
    grow: {
      scale: 5,
      transition: {
        type: "linear",
      },
    },
  }

  let clickAnimation = useAnimation()

  let [clickState, setClickState] = useState(false)

  const clickHandler = click =>
    clickState === true
      ? clickAnimation.start("grow")
      : clickAnimation.end("normal")

  return (
    <div>
      <motion.div
        className="box"
        variants={growVariant}
        initial="regular"
        animate={clickAnimation}
        style={{ marginBottom: "400px" }}
      />
      <button onClick={() => clickHandler(true)}> Hello Click Me </button>
    </div>
  )
}
