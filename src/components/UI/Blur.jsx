import React from "react"

const Blur = ({layer = -1, blur = 5, width = 100, height = 100, top = 0, left = 0}) => {
  return (
    <div
      style={{
        zIndex: layer,
        backdropFilter: `blur(${blur}px)`,
        width: `${width}%`,
        height: `${height}%`,
        position: "fixed",
        top: top,
        left: left
      }}
    ></div>
  )
}

export default Blur
