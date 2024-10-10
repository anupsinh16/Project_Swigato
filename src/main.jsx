import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import Navbar from "./navbar.jsx";
import Content from "./content.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBaseDemo from "./content2.jsx";
import Routing from "./Routingapp.jsx";
import Footer from "./footer.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    {/* // <App/> */}
   
    <Navbar/>
    <br/><br/>
    <Routing/>
    <Footer/>
    
    
    

    
  </StrictMode>
)
