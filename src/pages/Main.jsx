import React, {Fragment, useState, useEffect} from "react"
import {Statistics} from "@/api"
import {useFetching} from "@/hooks"
import {
  Home,
  AboutUs,
  NFTHorses,
  Racing,
  BettingSystem,
  Earnings,
  Roadmap,
  Partners,
  Support
} from "@/components"
import {
  Loading,
  Gradient,
  Navbar,
  Content
} from "@/components/UI"

const Main = () => {
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches

  const [fetchVisit, isLoading, error] = useFetching(async () => {
    await Statistics.visit("main")
  })
  useEffect(() => {
    fetchVisit()
  }, [])

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
        title: "About us",
        Element: AboutUs
      },
      {
        id: 2,
        title: "NFT Horses",
        Element: NFTHorses
      },
      {
        id: 3,
        title: "Racing",
        Element: Racing
      },
      {
        id: 4,
        title: "Betting System",
        Element: BettingSystem
      },
      {
        id: 5,
        title: "Earnings",
        Element: Earnings
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

  if (!isMobile) {
    data.links.push(
      {
        id: 6,
        title: "Roadmap",
        Element: Roadmap
      }
      // {
      //   id: 7,
      //   title: "Partners",
      //   Element: Partners
      // }
    )
  }

  return (
    <Fragment>
      <Loading />
      <Gradient />
      {!isMobile && <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        links={data.links}
        actions={data.actions}
      />}
      <Content
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        blocks={data.links.concat(data.actions)}
      />
    </Fragment>
  )
}

export default Main
