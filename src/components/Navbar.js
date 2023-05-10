import React from "react";
import logoCiudad from '../images/miscalenea/logo.png';
import '../App.css';
const navbar =() =>  {
    
    return(
    <nav>
    <div className="barra">
    
      <img src={logoCiudad} className="barra__logo" alt="logoCiudad" />
      <h1 className="barra__title">Ciudades</h1>
    </div>
    </nav>
  
)}
export default navbar