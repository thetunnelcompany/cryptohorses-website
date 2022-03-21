import React from "react"
import {TextBlock} from "./UI"
import GenesImage from "@/assets/images/genes.svg"
// import OwnerTwoNFTsImage from "@/assets/images/owner-two-nfts.svg"
// import Horse02Image from "@/assets/images/horse-02.png"

const Economy = ({id}) => {
  const title = "Breeding and Trading NFT Horses"
  const text = "Administrators of hippodromes are called bookmakers. Bookmakers choose how and when to host the races in their hippodrome. The races can be made public, comply with certain requirements (for example have certain a winning history), or via invite (for specific users)."
  const references = [
    {
      title: "Host races in your own",
      url: "/"
    },
    {
      title: "Host races in your their hippodrome",
      url: "/"
    }
  ]
  const images = [
    // {
    //   path: OwnerTwoNFTsImage,
    //   description: ""
    // },
    {
      path: GenesImage,
      description: ""
    },
    // {
    //   path: Horse02Image,
    //   description: ""
    // }
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

export default Economy
