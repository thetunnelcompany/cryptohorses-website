import React from "react"
import {Reference} from "@/components/UI"
import "./TextBlock.css"

const TextBlock = ({title, text, references, images}) => {
  return (
    <div className="TextBlock">
      <div className="TextBlock-container">
        <div className="TextBlock-container-1">
          <h1 className="TextBlock-container-1-title">{title}</h1>
          <p className="TextBlock-container-1-text">{text}</p>
          {references.map(({title, url}, index) => {
            return <Reference key={index} text={title} url={url} />
          })}
        </div>
        <div className="TextBlock-container-2">
          {images.map(({path, description}, index) => {
            return (
              <img
                key={index}
                className="TextBlock-container-2-image"
                src={path}
                alt={description}
                style={{width: `${75 / images.length}%`}}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TextBlock
