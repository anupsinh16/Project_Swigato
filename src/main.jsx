import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import Navbar from "./navbar.jsx";
import Content from "./content.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonBaseDemo from "./content2.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    {/* // <App/> */}
   
    <Navbar/>
    <Content/>
    <ButtonBaseDemo/>
    
  </StrictMode>
)
