import React, { useState,useEffect } from 'react';
import '../App.css';
import config from '../config.json';



const Infopol = ({ content, setContent,result }) => {
  const [contentVisible, setContentVisible] = useState(true);
  const [buttonText, setButtonText] = useState('o');


  const [imagePath, setImagePath] = useState(null);
  
 
  useEffect(() => {

    if (result ) {
      const stateAbbreviation = result.places[0]['state abbreviation'];
      const imageName = config.nombresImagenes[stateAbbreviation];
      


    const loadImage = async () => {
      try {
        const image = await import(`../images//flags/${imageName}`);
        setImagePath(image.default);
      } catch (error) {
        console.error(`Error al cargar la imagen ${imageName}:`, error);
      }
    };
    
    loadImage();
  }
  }, [result]);
  




  const toggleContent = () => {
    setContentVisible(!contentVisible);
    setButtonText(contentVisible ? '_' : 'o');
  };

  
  

  return (
    <div>
      <nav className='compNav' style={{ backgroundColor: 'purple', padding: '10px' }}>

      <span>Información Política</span>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={toggleContent} style={{ color: 'white', backgroundColor: 'red' }}>
            {buttonText}
          </button>
        </div>
      </nav>
      {contentVisible && (
         result ?(
          
          <div className="resultado">
           <div className="Container1">
           <img src={imagePath} className="bandera" alt="logoBandera"  />
           </div>
           <div className="Container2">
            <p>Ciudad: {result.places[0]['place name']}</p>
            <p>Comunidad autónoma: {result.places[0].state}</p>
            </div>
            </div>
        ):(
        <div>
        <p>Ciudad:</p>
        <p>Comunidad autónoma:</p>
        </div>
        )
      )}
      
    </div>
  );
};

export default Infopol;
