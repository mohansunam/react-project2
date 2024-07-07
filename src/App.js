import React from 'react'
import { Router } from 'react-router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path:'about-page',
      element: <About/>,
    },
    {
      path:'contact-page',
      element: <Contact/>,
    }
  ])
  return <RouterProvider router ={router}/>
}

export default App
