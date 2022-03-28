import React from "react"
import {WHITE_PAPER} from "@/config"
import {HomeBlock} from "@/components/UI"
import ImageHorseAndCup from "@/assets/images/horse-and-cup.png"
import ImageTwitter from "@/assets/images/twitter.png"
import ImageMedium from "@/assets/images/medium.png"
import ImageDiscord from "@/assets/images/discord.png"
import ImageTelegram from "@/assets/images/telegram.png"

const Home = ({id}) => {
  const image = ImageHorseAndCup
  const title = "crypto horses wax game"
  const subtitle = "#you can win the best"
  const text = "Crypto Horses is a virtual world of horse racing based on WAX blockchain. " +
    "You can create businesses, buy and breed NFT horses, place bets, or host races in your own hippodromes for actual profit."
  const action = {
    title: "White Paper",
    url: WHITE_PAPER
  }

  return (
    <HomeBlock
      image={image}
      title={title}
      subtitle={subtitle}
      text={text}
      action={action}
    />
  )
}

export default Home
