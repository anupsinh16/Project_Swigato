import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';




function Content() {
  
  return (
    <>
    
    <div className='background' id='intro'>
        
        <div className='inbg'>
            <div>
              <br/> <br/> <br/> 
            <img src='\SWIGATO.png ' style={{height:"150px",}}></img>
                <h3>Just Order 
                    and Chill !!!</h3>
                    <br/> <br/> <br/> 
                {/* <h4>We offers and assures ... </h4>
                <img src='/fast deli.jpg' style={{height:"100px"}}></img>
 */}
                

                {/* <button type="button" class="btn btn-warning" style={{margin:"2% ", color:"red"}}> <b>ORDER NOW</b></button> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                 <Stack spacing={2} direction="row" id="ordbut">
                 <Button variant="contained" href="#" color="success">ORDER NOW</Button>
      
                </Stack>
                </div>
                
                
            </div>
            <div></div>

        </div>
        
    </div>


    <div>
    
    
    </div>

    </>
  )
}

export default Content;
