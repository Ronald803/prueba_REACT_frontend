import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';
import { Bartender, Comida, CreateUser, Home, Musica, NotFoundPage, Salone } from './pages/index';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<CreateUser />} />
          <Route path="/servicios/salones" element={<Salone />} />
          <Route path="/servicios/comida" element={<Comida />} />
          <Route path="/servicios/musica" element={<Musica />} />
          <Route path="/servicios/bartender" element={<Bartender />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
