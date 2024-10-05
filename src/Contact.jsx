import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
function Contact() {
  

  return (
    <>
       <div className='cid' >
          <div style={{flexBasis:"100%"}}>
            <h1 style={{color:"red", margin:"2%"}}>Contact us</h1>
            <br/>
            <p style={{fontFamily:"inherit",fontSize:"22px"}}>We’re here to help! Whether you have a question about your order, feedback on our service, or a partnership inquiry, we’d love to hear from you. At Swigato, your satisfaction is our top priority, and our dedicated support team is available around the clock to assist you.

              Reach out to us via email, phone, or live chat, and we’ll get back to you as soon as possible. Your experience matters to us, and we’re committed to making your Swigato journey smooth and enjoyable!

              Feel free to connect with us for any support, suggestions, or queries. We look forward to hearing from you!
              </p>

          </div>
          <div style={{flexBasis:"100%"}}>
            <img src='/images/contact.jpg' style={{margin:"2%",maxWidth:"80%",maxHeight:"90%"}}></img>
          </div>
       </div>
       <hr></hr>

       <div className='cid' >
        <div style={{flexBasis:"100%"}}>
          <h3>Fill up this following information and we will contact you within 24 hr...</h3>
          <br/>
          <p><LocalPhoneIcon/>  9767235897</p>
         <p> <EmailIcon/>  chouhananupsinhshivaji@gmail.com</p>
          <br/>
          
        </div>

        <div style={{flexBasis:"100%"}}>
        <p><TextField id="standard-basic" label="Name" variant="standard" /> </p>           
        <p><TextField id="standard-basic" label="Email" variant="standard" /></p>
        <p><TextField id="standard-basic" label="Phone no." variant="standard" /></p>
        <p><TextField id="standard-basic" label="Message" variant="standard" /> </p>
        <Button variant="contained">Submit</Button>
        </div>
       </div>
       <hr></hr>
    </>
  )
}

export default Contact
