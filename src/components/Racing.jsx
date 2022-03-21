import React from "react"
import {TextBlock} from "./UI"
import FlagsImage from "@/assets/images/flags.png"

const Racing = ({id}) => {
  const title = "Participating in racing"
  const text = "Administrators of hippodromes are called bookmakers. Bookmakers choose how and when to host the races in their hippodrome. The races can be made public, comply with certain requirements (for example have certain a winning history), or via invite (for specific users)."
  const references = [
    {
      title: "Host races in your own",
      url: "/"
    }
  ]
  const images = [
    {
      path: FlagsImage,
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
