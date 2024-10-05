import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Form() {
  

  return (
    <>
    <div id='signin'>
      <form action='#'>
            <div>
                <h1 style={{color:"crimson"}}>Register</h1>
            </div>
            <br/>
            <div class="mb-3">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name"/>
                
            </div>

            <div class="mb-3">
                <label for="mob" class="form-label">Phone number</label>
                <input type="number" class="form-control" id="mob" />
                
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="addr" class="form-label">Address</label>
                <input type="text" class="form-control" id="addr"/>
                
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            {/* <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" class="btn btn-primary">Submit</button>
            
        </form>
    </div>
    </>
  )
}

export default Form
