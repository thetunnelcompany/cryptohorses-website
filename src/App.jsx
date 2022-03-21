import React, {StrictMode} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
// import {Stats} from "./api"
import routes from "./routes"
import "./App.css"

const App = () => {
  // await Stats.visit()

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
