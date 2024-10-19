import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  
  return (
    <>
<nav className="navbar navbar-expand-lg fixed-top bg-dark bg-gradient"  id='nav' >
  
  <div className="container-fluid ">
  <NavLink className="navbar-brand " to="/" style={{color : 'red', fontFamily : 'Fredoka'}}><b>Swigato</b> </NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 me-2">
        <li style={{color:"red",marginTop:"5px",marginRight:"5px"}}><NavLink to='/'><HomeIcon style={{color:"white"}}/></NavLink></li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/about" id='nit' >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/forms"} id='nit'>Sign-in</NavLink>
          
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
          <NavLink className="nav-link" aria-current="page" to='/contact' id='nit'>Contact us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to='/foods' id='nit'>Foods</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./cart" id='nit'>My cart</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search for Restaurant and Food" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit" style={{color:"white"}}>Search</button>
      </form>
    </div>
  </div>
</nav>



    </>
  )
}

export default Navbar;
