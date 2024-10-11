import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Contact'
import About from './About'
import Content from './content'
import ButtonBaseDemo from './content2'
import Navbar from './navbar'
import Cartt from './cart'
import Foods from './foods'
import Form from './form'
import Form2 from './form2'
import { BrowserRouter,Routes, Route } from 'react-router-dom'



export const foodinfo = createContext(); // created a context api

function Routing() {
  const [cartitem, setcartitem] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart):[]
  })
  


  return (
   <BrowserRouter>
   <foodinfo.Provider value={{cartitem, setcartitem}}>
        <Routes>
            <Route path='/' element={<ButtonBaseDemo/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/foods' element={<Foods/>}/>
            <Route path='/cart' element={<Cartt/>}/>           
            <Route path='/forms' element={<Form2/>}/>
            <Route path='/register' element={<Form/>}/>
        </Routes>
        </foodinfo.Provider>
   </BrowserRouter>
  )
}

export default Routing
