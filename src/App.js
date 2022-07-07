import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';
import { Bartender, Comida, Home, Login, Create_User, Musica, NotFoundPage, Salone } from './pages/index';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='container p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Create_User" element={<Create_User />} />
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
