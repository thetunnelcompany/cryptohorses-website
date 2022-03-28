import React from "react"
import {WHITE_PAPER} from "@/config"
import {TextBlock} from "@/components/UI"
import HorsesImage from "@/assets/images/horses.png"

const BettingSystem = ({id}) => {
  const title = "Analyze and place bet on racehorses"
  const text = "The result of the racing is not accidental. " +
    "It is calculated by a complex formula that takes into account all the parameters of the NFT Horse, it is pedigree, and controlled RNG technology. " +
    "In the future, we plan to involve leading bookmakers. You can read about this in the Scaling section."
  const references = [
    {
      title: "Read more about Betting system",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/betting-system`
    },
    {
      title: "Read about Scaling",
      url: `${WHITE_PAPER}/business-model/scaling`
    }
  ]
  const images = [
    {
      path: HorsesImage,
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

export default BettingSystem
