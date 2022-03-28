import React from "react"
import {Gradient} from "@/components/UI"
import {Reference} from "@/components/UI"
import LogoImage from "@/assets/images/logo-2.svg"
import "./Information.css"

const Information = ({title, text, references}) => {
  return (
    <div className="Information">
      <Gradient />
      <div className="Information-container">
        <img className="Information-container-image" src={LogoImage} alt="" />
        <div className="Information-container-box">
          <h1 className="Information-container-box-title">{title}</h1>
          <p className="Information-container-box-text">{text}</p>
          {references.map(({title, url}, index) => {
            return <Reference key={index} text={title} url={url} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Information
