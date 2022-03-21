import React from "react"
import {Main, PrivacyPolicy, NotFound} from "@/pages"

const routes = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes
