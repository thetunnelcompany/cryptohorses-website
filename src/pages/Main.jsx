import React, {Fragment, useState} from "react"
import {
  Gradient,
  Home,
  NFTs,
  Economy,
  Racing,
  Hippodromes,
  Auction,
  Roadmap,
  Support
} from "@/components"
import {
  Loading,
  Navbar,
  Content
} from "@/components/UI"

const Main = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const data = {
    links: [
      {
        id: 0,
        title: "Home",
        Element: Home
      },
      {
        id: 1,
        title: "NFTs",
        Element: NFTs
      },
      {
        id: 2,
        title: "Economy",
        Element: Economy
      },
      {
        id: 3,
        title: "Racing",
        Element: Racing
      },
      {
        id: 4,
        title: "Hippodromes",
        Element: Hippodromes
      },
      {
        id: 5,
        title: "Auction",
        Element: Auction
      },
      {
        id: 6,
        title: "Roadmap",
        Element: Roadmap
      }
    ],
    actions: [
      {
        id: 7,
        title: "Support",
        Element: Support
      }
    ]
  }

  return (
    <Fragment>
      <Loading />
      <Gradient />
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        links={data.links}
        actions={data.actions}
      />
      <Content
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        blocks={data.links.concat(data.actions)}
      />
    </Fragment>
  )
}

export default Main
