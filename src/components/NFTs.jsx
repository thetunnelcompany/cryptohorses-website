import React from "react"
import {TextBlock} from "./UI"
import Horse01Image from "@/assets/images/horse-01.svg"

const NFTs = ({id}) => {
  const title = "Host races in your own hippodromes"
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
    {
      path: Horse01Image,
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

export default NFTs
