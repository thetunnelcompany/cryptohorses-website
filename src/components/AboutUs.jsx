import React from "react"
import {WHITE_PAPER} from "@/config"
import {TextBlock} from "@/components/UI"
import GameImage from "@/assets/images/game.png"

const AboutUs = ({id}) => {
  const title = "Overall information about Crypto Horses"
  const text = "Crypto Horses is a virtual media platform that simulates real racing, including all the basic mechanics and techniques, and gives no less vivid emotions than from live sports. " +
    "The gameplay is designed to be interesting, extensive in the number of game mechanics, and intuitive for each player."
  const references = [
    {
      title: "Read more about platform and earnings mechanics",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/crypto-horses-summary`
    },
    {
      title: "Read about NFT Horses",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/nft-horses`
    }
  ]
  const images = [
    {
      path: GameImage,
      description: ""
    }
  ]

  return (
    <TextBlock
      title={title}
      text={text}
      references={references}
      images={images}
    />
  )
}

export default AboutUs
