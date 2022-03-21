import React from "react"
import {ListBlock} from "./UI"
import CoinsImage from "@/assets/images/hippodrome.svg"

const Auction = ({id}) => {
  const title = "Breeding and Trading NFT Horses"
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
      title: "Host races in your own",
      url: "/"
    }
  ]
  const images = [
    {
      path: CoinsImage,
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

export default Auction
