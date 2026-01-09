import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React, { Component } from 'react'
import Hero from "./components/Content/Hero/Hero.jsx"


function App() {
let routes = createBrowserRouter([
  {
    path:"/",
    Component: Hero
  }
])

  return (
    <RouterProvider router={routes}/>
    
  )
}

export default App
