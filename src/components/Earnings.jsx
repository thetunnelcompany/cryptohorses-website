import React from "react"
import {WHITE_PAPER} from "@/config"
import {ListBlock} from "@/components/UI"
import CoinImage from "@/assets/images/coin.png"

const Earnings = ({id}) => {
  const title = "Player Earnings Mechanics"
  const list = [
    [
      "Breeding and trading NFT horses",
      "Hosting races in hippodromes",
      "Development and trading hippodromes",
      "Selling analysis and predictions",
      "Staking programs",
      "Reward programs"
    ],
    [
      "Participating in races",
      "Advertising on hippodromes",
      "Betting",
      "Watching racing (ad)",
      "Referral programs",
      "Bug reporting"
    ]
  ]
  const references = [
    {
      title: "Crypto Horses Coin",
      url: `${WHITE_PAPER}/token-economy/crypto-horses-coin-chc`
    }
  ]
  const images = [
    {
      path: CoinImage,
      description: ""
    }
  ]

  return (
    <ListBlock
      title={title}
      list={list}
      references={references}
      images={images}
    />
  )
}

export default Earnings
