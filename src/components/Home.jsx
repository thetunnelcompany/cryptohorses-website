import React from "react"
import {HomeBlock} from "./UI"
import ImageHorseAndCup from "@/assets/images/horse-and-cup.png"
import ImageTwitter from "@/assets/images/twitter.png"
import ImageMedium from "@/assets/images/medium.png"
import ImageDiscord from "@/assets/images/discord.png"
import ImageTelegram from "@/assets/images/telegram.png"

const Home = ({id}) => {
  const image = ImageHorseAndCup
  const title = "Crypto Horses Wax Game"
  const subtitle = "#1 Top Scariest Ghost 2022"
  const text = "In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind."
  const action = {
    title: "White Paper",
    url: "https://crypto-horses.gitbook.io"
  }
  const links = [
    {
      icon: ImageTwitter,
      url: "https://twitter.com"
    },
    {
      icon: ImageMedium,
      url: "https://medium.com"
    },
    {
      icon: ImageDiscord,
      url: "https://discord.com"
    },
    {
      icon: ImageTelegram,
      url: "https://telegram.org"
    }
  ]

  return (
    <HomeBlock
      image={image}
      title={title}
      subtitle={subtitle}
      text={text}
      action={action}
      links={links}
    />
  )
}

export default Home
