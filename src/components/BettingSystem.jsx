import React from "react"
import {WHITE_PAPER} from "@/config"
import {TextBlock} from "@/components/UI"
import HorsesImage from "@/assets/images/horses.png"

const BettingSystem = ({id}) => {
  const title = "Analyze and place bet on racehorses"
  const text = "Administrators of hippodromes are called bookmakers. " +
    "Bookmakers choose how and when to host the races in their hippodrome. " +
    "The races can be made public, comply with certain requirements (for example have certain a winning history), or via invite (for specific users)."
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
