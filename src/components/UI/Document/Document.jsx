import React from "react"
import {Gradient} from "@/components"
import LogoImage from "@/assets/images/logo-2.svg"
import "./Document.css"

const Document = ({title, text}) => {
  return (
    <div className="Document">
      <Gradient />
      <div className="Document-header">
        <a href="/home">
          <img className="Document-header-logo" src={LogoImage} alt="" />
        </a>
        <h1 className="Document-header-title">{title}</h1>
      </div>
      <div className="Document-content">
        <p className="Document-content-text">{text}</p>
      </div>
    </div>
  )
}

export default Document
