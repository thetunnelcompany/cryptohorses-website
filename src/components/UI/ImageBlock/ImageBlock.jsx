import React from "react"
import "./ImageBlock.css"

const ImageBlock = ({image}) => {
  return (
    <div className="ImageBlock">
      <div className="ImageBlock-container">
        <img className="ImageBlock-container-image" src={image} alt="" />
      </div>
    </div>
  )
}

export default ImageBlock
