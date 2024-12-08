import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function About() {
  

  return (
    <>
      <br/>
       <h1 style={{color:"red"}}>About Us</h1>
       <div style={{marginLeft : "8%",marginRight:"8%",margin:"5%"}}>
        <b style={{fontFamily:"inherit",fontSize:"20px"}}>At Swigato, we believe that great food should be accessible to everyone, anytime, anywhere. Our mission is to connect you with your favorite local restaurants, street food vendors, and culinary artists, bringing delicious meals right to your doorstep. Whether you’re craving a quick bite, exploring new cuisines, or simply enjoying the comfort of home dining, Swigato is here to make your food experience seamless and enjoyable.</b>
        <img src='/public/images/swigato.png' style={{margin:"2%",maxWidth:"80%",maxHeight:"90%",backgroundColor:"lavender",border:"2px",borderRadius:"20px"}}></img>
        <p style={{fontFamily:"inherit",fontSize:"18px"}}>With an easy-to-use platform and a vast selection of dishes from all your favorite places, we make food ordering simple, fast, and reliable. Our focus on quality service ensures that every meal arrives fresh and on time, making sure that every dining moment with Swigato is unforgettable.
        Join us in our journey to redefine food delivery, one meal at a time!</p>
       
       </div>
    </>
  )
}

export default About
