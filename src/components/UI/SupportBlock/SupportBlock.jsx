import React, {useState} from "react"
import {Link} from "react-router-dom"
import {Feedbacks} from "@/api"
import {useFetching} from "@/hooks"
import {Reference, Social} from "@/components/UI"
import "./SupportBlock.css"

const SupportBlock = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [fetchMessage, isLoading, error] = useFetching(async (firstname, lastname, email, message) => {
    await Feedbacks.message(firstname, lastname, email, message)
  })

  const title = "Stay in touch with us!"
  const text = "24/7 our team is ready to help and answer all your questions. " +
    "You can contact us through the contact form or write to us on social networks. " +
    "Regarding cooperation:"

  const sendMessage = () => {
    const setOnBorder = (selector) => {
      const el = document.querySelector(selector)
      el.style.borderWidth = "2px"
      el.style.borderStyle = "solid"
      el.style.borderColor = "#bc3e55"
    }

    const setOffBorder = (selector) => {
      const el = document.querySelector(selector)
      el.style.borderWidth = "2px"
      el.style.borderStyle = "solid"
      el.style.borderColor = "#f0f0f0"
    }

    const setOnBorderBottom = (selector) => {
      const el = document.querySelector(selector)
      el.style.borderBottomWidth = "2px"
      el.style.borderBottomStyle = "solid"
      el.style.borderBottomColor = "#bc3e55"
    }

    const setOffBorderBottom = (selector) => {
      const el = document.querySelector(selector)
      el.style.borderBottomWidth = "2px"
      el.style.borderBottomStyle = "solid"
      el.style.borderBottomColor = "#f0f0f0"
    }

    const [firstname, lastname] = fullName.split(" ")

    const selectorFullName = ".SupportBlock-container-2-send-fullname"
    if (!firstname || !lastname) {
      setOnBorderBottom(selectorFullName)
    } else {
      setOffBorderBottom(selectorFullName)
    }

    const selectorEmail = ".SupportBlock-container-2-send-email"
    if (!email) {
      setOnBorderBottom(selectorEmail)
    } else {
      setOffBorderBottom(selectorEmail)
    }

    const selectorMessage = ".SupportBlock-container-2-send-message"
    if (!message) {
      setOnBorder(selectorMessage)
    } else {
      setOffBorder(selectorMessage)
    }

    if (firstname && lastname && email && message) {
      fetchMessage(firstname, lastname, email, message)

      setFullName("")
      setEmail("")
      setMessage("")
    }
  }

  return (
    <div className="SupportBlock">
      <div className="SupportBlock-container">
        <div className="SupportBlock-container-1">
          <h1 className="SupportBlock-container-1-title">{title}</h1>
          <p className="SupportBlock-container-1-text">{text}</p>
          <Social />
          <div className="SupportBlock-container-1-references">
            <Reference text="Privacy Policy" url="#/privacy-policy" />
          </div>
        </div>
        <div className="SupportBlock-container-2">
          <div className="SupportBlock-container-2-send">
            <label className="SupportBlock-container-2-send-title">Send Us a Message</label>
            <input
              type="text"
              value={fullName}
              placeholder="Full Name"
              onChange={(event) => setFullName(event.target.value)}
              className="SupportBlock-container-2-send-fullname"
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              className="SupportBlock-container-2-send-email"
            />
            <textarea
              value={message}
              placeholder="Your message goes here..."
              className="SupportBlock-container-2-send-message"
              onChange={(event) => setMessage(event.target.value)}
            />
            <input
              type="submit"
              value="Submit Form"
              onClick={sendMessage}
              className="SupportBlock-container-2-send-submit"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportBlock
