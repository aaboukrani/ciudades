import React from "react";
import logoCiudad from '../images/miscalenea/logo.png';
import '../App.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="barra">
        <img src={logoCiudad} className="barra__logo" alt="logoCiudad" />
        <h1 className="barra__title">Ciudades</h1>

        <ul>
        <li>
          <Link to="/buscador">Buscador</Link>
        </li>
        <li>
          <Link to="/historial">Historial</Link>
        </li>
      </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
