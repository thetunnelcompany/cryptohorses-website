import React from "react"
import {Reference} from "@/components/UI"
import "./ListBlock.css"

const ListBlock = ({title, list, references, images}) => {
  return (
    <div className="ListBlock">
      <div className="ListBlock-container">
        <div className="ListBlock-container-1">
          <h1 className="ListBlock-container-1-title">{title}</h1>
          <div className="ListBlock-container-1-box">
            {list.map((elements, index) => {
              return (
                <ul key={index} className="ListBlock-container-1-box-list">
                  {elements.map((text, index) => {
                    return (
                      <li key={index}>
                        <p className="ListBlock-container-1-box-list-text">{text}</p>
                      </li>
                    )
                  })}
                </ul>
              )
            })}
          </div>
          {references.map(({title, url}, index) => {
            return <Reference key={index} text={title} url={url} />
          })}
        </div>
        <div className="ListBlock-container-2">
          {images.map(({path, description}, index) => {
            return (
              <img
                key={index}
                className="ListBlock-container-2-image"
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

export default ListBlock
