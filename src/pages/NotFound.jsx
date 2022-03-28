import React, {Fragment, useEffect} from "react"
import {Statistics} from "@/api"
import {useFetching} from "@/hooks"
import {WEBSITE_URL} from "@/config"
import {Loading} from "@/components/UI"
import {Information} from "@/components/UI"

const NotFound = () => {
  const [fetchVisit, isLoading, error] = useFetching(async () => {
    await Statistics.visit("not-found")
  })
  useEffect(() => {
    fetchVisit()
  }, [])

  const title = "Page not found"
  const text = "The final example we’ll explore today is how to store an input’s current value inside of a state value. We are going to use the useState hook provided to us by React. You can learn more about the useState hook here."
  const references = [
    {
      title: "Go to home page",
      url: WEBSITE_URL
    }
  ]

  return (
    <Fragment>
      <Loading />
      <Information
        title={title}
        text={text}
        references={references}
      />
    </Fragment>
  )
}

export default NotFound
