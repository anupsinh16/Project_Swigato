import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'
import About from './About'
import Content from './content'
import ButtonBaseDemo from './content2'
import Navbar from './navbar'
import Cart from './cart'
import Foods from './foods'
import Form from './form'
import Form2 from './form2'
import { BrowserRouter,Routes, Route } from 'react-router-dom'



function Routing() {
  

  return (
   <BrowserRouter>
        <Routes>
            <Route path='/' element={<ButtonBaseDemo/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/foods' element={<Foods/>}/>
            <Route path='/forms' element={<Form2/>}/>
            <Route path='/register' element={<Form/>}/>
        </Routes>
   
   </BrowserRouter>
  )
}

export default Routing
