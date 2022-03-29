import React, {StrictMode} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
import routes from "./routes"
import "./App.css"

const App = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  if (isSafari) {
    alert(
      "The site for the safari browser is currently under development so bugs are possible. " +
      "It is recommended to run the site in other browsers (Chrome, Opera, Firefox)."
    )
  }

  return (
    <StrictMode>
      <HashRouter>
        <Routes>
          {routes.map(({path, element}, index) => {
            return <Route key={index} path={path} element={element} />
          })}
        </Routes>
      </HashRouter>
    </StrictMode>
  )
}

export default App
