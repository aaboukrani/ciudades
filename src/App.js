import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
//const images = require.context('../images/flags', false, /\.(png|jpe?g|svg)$/);
//const imageKeys = images.keys();

function App() {
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


      //Esto lo dejo así para cuando sepa de qué manera puedo llamar a las banderas
      //const searchString = searchResult.places[0].state; 
     // const matchingImageKey = imageKeys.find((key) => key.includes(searchString));
      //const matchingImage = matchingImageKey ? images(matchingImageKey) : null;

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
      <Navbar />
      <div className="buscador">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit">Buscar</button>
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
      {searchResult? (
        <div className="resultado">
          <h2>Resultado:</h2>
          
          <p>Ciudad: {searchResult.places[0]['place name']}</p>
          <p>Comunidad autónoma: {searchResult.places[0].state}</p>
        </div>
      ):searchResult === null && (
        <div className="resultado">
          
          <p style={{ color: 'black' }}>No se encontraron resultados para la búsqueda.</p>
        </div>
      )}
      
    </div>
  );
}

export default App;
