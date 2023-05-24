import React, { useState } from 'react';

import '../App.css';
import Infopol from './Infopol';
import Infogeo from './Infogeo';
import Infocli from './Infocli';




function Buscador() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isError, setIsError] = useState(false);



  const handleSearch = (event) => {
    event.preventDefault();
    if (searchText === '') {
      setIsError(true);
      return;
    }
    if (!isNaN(searchText) && searchText.length === 5) {
      setSearchResult(null);
      consultaApi(searchText);




      setIsError(false);
    } else {
      setIsError(true);
    }
  }




    
  const consultaApi = (searchText) => {
    fetch(`https://api.zippopotam.us/es/${searchText}`)
      .then(response => response.json())
      .then(data => {
        if (data.places.length === 0) {
          setSearchResult(null);
          setIsError(true);
        } else {
          setSearchResult(data);
          setIsError(false);
        }
        
      })
      .catch(error => console.log(error));
  }

  return (

    
    <div className="App">
   

      
        <div className="buscador">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            <button  type="submit">Buscar</button>
          </form>
          {isError && (
            <p style={{ color: 'red' }}>
              {searchText === ''
                ? 'El campo de búsqueda no puede estar vacío'
                : !isNaN(searchText) && searchText.length !== 5
                ? 'El código postal debe tener 5 dígitos'
                : 'Tiene que ser un número'}
            </p>
          )}
          
        </div>

        
        {!isError && !searchResult && (
            
            <div >
          
            <p style={{ color: 'black' }}>No se encontraron resultados para la búsqueda.</p>
           </div>

        )}
        
      
        <div className="divcomp">
          <Infopol   result={searchResult} />
          </div>
          
       

          <div className="divcomp">
          <Infogeo   result={searchResult} />
          </div>


        {/*
         <div className="divcomp">
          <Infocli   result={searchResult} />
          </div>*/}
    </div>
    
  );
}

export default Buscador;
