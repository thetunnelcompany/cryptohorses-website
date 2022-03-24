import React from "react"
import "./HomeBlock.css"

const HomeBlock = ({image, subtitle, title, text, action, links}) => {
  return (
    <div className="HomeBlock">
      <div className="HomeBlock-container">
        <div className="HomeBlock-container-1">
          <img className="HomeBlock-container-1-image" src={image} alt="" />
        </div>
        <div className="HomeBlock-container-2">
          <label className="HomeBlock-container-2-subtitle">{subtitle}</label>
          <h1 className="HomeBlock-container-2-title">{title}</h1>
          <p className="HomeBlock-container-2-text">{text}</p>
          <div className="HomeBlock-container-2-box">
            <div className="HomeBlock-container-2-box-action">
            <a
              className="HomeBlock-container-2-box-action-link"
              href={action.url}
            >
              {action.title}
            </a>
            </div>
            <div className="HomeBlock-container-2-box-links">
              {links.map(({icon, url}, index) => {
                return (
                  <a
                    key={index}
                    className="HomeBlock-container-2-box-links-item"
                    style={{backgroundImage: `url(${icon})`}}
                    href={url}
                  >
                    <img className="HomeBlock-container-2-box-links-item-icon" src={icon} alt="" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBlock
