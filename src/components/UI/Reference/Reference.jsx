import React from "react"
import RightArrowImage from "@/assets/images/right-arrow.svg"
import "./Reference.css"

const Reference = ({text, url}) => {
  return (
    <div className="Reference">
      <a className="Reference-text" href={url}>{text}</a>
      <img className="Reference-image" src={RightArrowImage} alt="" />
    </div>
  )
}

export default Reference
