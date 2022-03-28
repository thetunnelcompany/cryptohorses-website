import React, {StrictMode} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
import routes from "./routes"
import "./App.css"

const App = () => {
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
