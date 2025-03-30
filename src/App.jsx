import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="homepage">Home</Link>
        <Link to="shoppage">Shop</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
