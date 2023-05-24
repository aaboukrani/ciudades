import React, { useState } from 'react';
import '../App.css';
import logoMapa from '../images/miscalenea/mapa.png';

const Infogeo = ({ result }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const [buttonText, setButtonText] = useState('o');


 
    const handleClick = () => {
      const mapsUrl = `https://www.google.com/maps/@${result.places[0].latitude},${result.places[0].longitude},13z`;
      window.open(mapsUrl, '_blank');
    };
  
  const toggleContent = () => {
    setContentVisible(!contentVisible);
    setButtonText(contentVisible ? '_' : 'o');
  };
  
  return (








    <div >
      <nav className='compNav' style={{ backgroundColor: 'purple', padding: '10px' }}>

      <span>Información Geográfica</span>


        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={toggleContent} style={{ color: 'white', backgroundColor: 'red' }}>
            {buttonText}
          </button>
        </div>
      </nav>
      {contentVisible && (
        result ? (
          <div className="resultado">


             <div className="Container1">
            <p>Longitud: {result.places[0].longitude}</p>
            <p>Latitud: {result.places[0].latitude}</p>
            </div>


            <div className="Container2">
            <button className="botonMaps" onClick={handleClick}>
            <img src={logoMapa} alt="mapa" />
            <span>Ver Mapa</span>
            </button>
            </div>
          </div>


        ) : result === null && (
          <div >
            <p>Longitud: </p>
            <p>Latitud: </p>
          </div>
        )
      )}

    </div>
     

  
  );
};

export default Infogeo;
