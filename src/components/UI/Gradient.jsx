import React from "react"

const Gradient = ({layer = -1, degree = 120, width = 100, height = 100, top = 0, left = 0}) => {
  return (
    <div
      style={{
        zIndex: layer,
        width: `${width}%`,
        height: `${height}%`,
        position: "fixed",
        top: top,
        left: left,
        background: `linear-gradient(${degree}deg, #330f1c 25%, #bc3e55 85%)`
      }}
    ></div>
  )
}

export default Gradient
