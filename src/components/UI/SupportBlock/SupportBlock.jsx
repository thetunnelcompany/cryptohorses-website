import React, {useState} from "react"
import {Link} from "react-router-dom"
// import {GoogleMap, Marker} from "react-google-maps"
// import {Anime, stagger} from "react-animejs"
import MapImage from "@/assets/images/map.png"
import TelegramIcon from "@/assets/images/telegram.svg"
import "./SupportBlock.css"

const SupportBlock = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const sendMessage = () => {
    console.log("Full Name: " + fullName)
    console.log("Email: " + email)
    console.log("Message: " + message)

    setFullName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="SupportBlock">
      <div className="SupportBlock-container">
        <div className="SupportBlock-view">
          <div className="SupportBlock-view-map">
            {/*<img className="SupportBlock-map-view-image" src={MapImage} />*/}
          </div>
          <div className="SupportBlock-view-send">
            <label className="SupportBlock-view-send-title">Send Us a Message</label>
            <input
              type="text"
              value={fullName}
              placeholder="First Name"
              onChange={(event) => setFullName(event.target.value)}
              className="SupportBlock-view-send-name"
            />
            <input
              type="email"
              value={email}
              placeholder="Last Name"
              onChange={(event) => setEmail(event.target.value)}
              className="SupportBlock-view-send-name"
            />
            <textarea
              value={message}
              placeholder="Your message goes here..."
              className="SupportBlock-view-send-message"
              onChange={(event) => setMessage(event.target.value)}
            />
            <input
              type="submit"
              value="Submit Form"
              onClick={sendMessage}
              className="SupportBlock-view-send-submit"
            />
          </div>
        </div>
        {/*<label className="SupportBlock-legal">
          Copyright © 2022 Crypto Horses. All rights reserved. <Link className="SupportBlock-footer-link" to="/privacy-policy">Privaty Policy.</Link>
        </label>*/}
      </div>
    </div>
  )
}

export default SupportBlock
