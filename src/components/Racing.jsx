import React from "react"
import {WHITE_PAPER} from "@/config"
import {TextBlock} from "@/components/UI"
import HippodromeImage from "@/assets/images/hippodrome.png"

const Racing = ({id}) => {
  const title = "Host races in your own hippodromes"
  const text = "Administrators of hippodromes are called bookmakers. " +
    "Bookmakers choose how and when to host the races in their hippodrome. " +
    "The races can be made public, comply with certain requirements (for example have certain a winning history), or via invite (for specific users)."
  const references = [
    {
      title: "Read more about Racing",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/horse-racing`
    },
    {
      title: "Read more about Hippodromes",
      url: `${WHITE_PAPER}/crypto-horses-metaplatform/hippodromes`
    }
  ]
  const images = [
    {
      path: HippodromeImage,
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

export default Racing
