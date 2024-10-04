import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'
import About from './About'
import Content from './content'
import ButtonBaseDemo from './content2'
import Navbar from './navbar'

import { BrowserRouter,Routes, Route } from 'react-router-dom'



function Routing() {
  

  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<ButtonBaseDemo/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
   
   </BrowserRouter>
  )
}

export default Routing
