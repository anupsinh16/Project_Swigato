import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Navbar() {
  
  return (
    <>
<nav className="navbar navbar-expand-lg  bg-dark bg-gradient"   >
  <div className="container-fluid ">
    <a className="navbar-brand " href="#" style={{color : 'red', fontFamily : 'Fredoka'}}><b></b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about" id='nit' >About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id='nit'>Sign-in</a>
        </li>
         {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">MyOrders</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>  */}
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href='/contact' id='nit'>Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" id='nit'>My cart</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for Restaurant and Food" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" style={{color:"blue"}}>Search</button>
      </form>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar;
