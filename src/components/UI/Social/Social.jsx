import React from "react"
import {TWITTER, MEDIUM, DISCORD, TELEGRAM, TIKTOK} from "@/config"
import ImageTwitter from "@/assets/images/twitter.png"
import ImageMedium from "@/assets/images/medium.png"
import ImageDiscord from "@/assets/images/discord.png"
import ImageTelegram from "@/assets/images/telegram.png"
import ImageTiktok from "@/assets/images/tiktok.png"
import "./Social.css"

const Social = () => {
  const links = [
    {
      icon: ImageTwitter,
      url: TWITTER
    },
    {
      icon: ImageMedium,
      url: MEDIUM
    },
    {
      icon: ImageDiscord,
      url: DISCORD
    },
    {
      icon: ImageTelegram,
      url: TELEGRAM
    },
    {
      icon: ImageTiktok,
      url: TIKTOK
    }
  ]

  return (
    <div className="Social">
      {links.map(({icon, url}, index) => {
        return (
          <a
            key={index}
            className="Social-link"
            style={{backgroundImage: `url(${icon})`}}
            href={url}
          >
            <img className="Social-link-icon" src={icon} alt="" />
          </a>
        )
      })}
    </div>
  )
}

export default Social
