import React, {useEffect, useState} from "react"
import {CSSTransition} from "react-transition-group"
import {Gradient} from "@/components/UI"
import LogoImage from "@/assets/images/logo-2.svg"
import LoadingImage from "@/assets/images/loading.svg"
import "./Loading.css"

const Loading = ({delay = 1000, timeout = 400}) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, delay)
  })

  return (
    <CSSTransition
      in={isLoading}
      timeout={timeout}
      classNames="Loading-transition"
      unmountOnExit
    >
      <div className="Loading">
        <Gradient layer={-1} />
        <div className="Loading-view">
          <img className="Loading-view-logo" src={LogoImage} alt="" />
          <img className="Loading-view-loading" src={LoadingImage} alt="" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default Loading
