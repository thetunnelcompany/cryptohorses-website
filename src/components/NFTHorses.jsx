import React from "react"
import {WHITE_PAPER} from "@/config"
import {TextBlock} from "@/components/UI"
import HorseImage from "@/assets/images/horse.png"

const NFTHorses = ({id}) => {
  const title = "Breeding and Trading NFT Horses"
  const text = "The NFT Horse is a valuable underlying asset that allows you to race and receive payouts. " +
    "NFT horses can be sold in the in-game marketplace or any other NFT marketplace. The owner has complete control of their NFT horses and Crypto Horses coins stored in an assigned wallet. " +
    "The payer can buy both randomly generated or bred horses with a bloodline and race history."
  const references = [
    {
      title: "Read more about marketplace",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/nft-marketplace`
    },
    {
      title: "Read about Breeding",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/burning-a-nft`
    }
  ]
  const images = [
    {
      path: HorseImage,
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

export default NFTHorses
