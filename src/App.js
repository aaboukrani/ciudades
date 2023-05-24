import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Buscador from './components/Buscador';
import Historial from './components/Historial';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/buscador" element={<Buscador />} />
          <Route path="/historial" element={<Historial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
