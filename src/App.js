import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import Salone from './components/Salone';
import Comida from './components/Comida';
import Bartender from './components/Bartender';
import Musica from './components/Musica';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/usuarios" element={<CreateUser/>} />
            <Route path="/servicios/salones" element={<Salone/>} />
            <Route path="/servicios/comida" element={<Comida/>} />
            <Route path="/servicios/musica" element={<Musica/>} />
            <Route path="/servicios/bartender" element={<Bartender/>} />
          </Routes>
   
    </BrowserRouter>
  );
}

export default App;
