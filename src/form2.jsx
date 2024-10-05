import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Form2() {
  

  return (
    <>
    <div id='signin'>
      <form action='#'>
            <div>
                <h1 style={{color:"crimson"}}>Sign-In</h1>
            </div>
            <br/>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
            <br/><br/><br/>
            <p>If you dont have account <a href='/register'>Click Here</a></p>
        </form>
    </div>
    </>
  )
}

export default Form2
