import { useState } from 'react'

import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Outlet/>
    <Footer/>
   
    </>
   
  )
}

export default App
