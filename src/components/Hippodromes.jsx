import React from "react"
import {TextBlock} from "./UI"
import HippodromeImage from "@/assets/images/hippodrome.svg"

const Hippodromes = ({id}) => {
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

export default Hippodromes
