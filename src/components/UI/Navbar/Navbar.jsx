import React from "react"
import {WEBSITE_URL} from "@/config"
import LogoImage from "@/assets/images/logo-2.svg"
import "./Navbar.css"

const Navbar = ({currentPage, setCurrentPage, links, actions}) => {
  return (
    <div className="Navbar">
      <a href={WEBSITE_URL}>
        <img className="Navbar-logo" src={LogoImage} alt="" />
      </a>
      <div className="Navbar-menu">
        <div className="Navbar-menu-list">
          {links.map(({id, title}, index) => {
            return (
              <div key={index}>
                <a
                  className={currentPage == id ? "Navbar-menu-list-link Navbar-menu-list-link-active" : "Navbar-menu-list-link"}
                  onClick={() => setCurrentPage(id)}
                >
                  {title}
                </a>
              </div>
            )
          })}
          {actions.map(({id, title}, index) => {
            return (
              <div key={index}>
                <a
                  className={currentPage == id ? "Navbar-menu-list-action Navbar-menu-list-action-active" : "Navbar-menu-list-action"}
                  onClick={() => setCurrentPage(id)}
                >
                  {title}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Navbar
