import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from 'react-router-dom';


function Footer() {
  

  return (
    <>
      <footer>
      <div id="footer1">
        <h3>Important Links</h3>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <a href='/cart'>Cart</a>
      </div>

      <div id="footer2">
        <h3>
          Get in touch!
        </h3>
        <input type="email"  placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping"></input>
        <a href='#'><button type="button" className="btn btn-danger" style={{margin:"2%"}} >Submit</button></a>
      </div>

      <div id="footer3">
        <h3>Connect with us on Social Platforms</h3>
        <a href='#' className='icons'><InstagramIcon/></a>
        <a href='#' className='icons'><FacebookIcon/></a>
        <a href='#' className='icons'><YouTubeIcon/></a>
        
      </div>
    </footer>
    </>
  )
}

export default Footer
