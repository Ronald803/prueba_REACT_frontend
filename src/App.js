import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import { Bartender, Comida, Home, Login, Create_User, Musica, NotFoundPage, Salone, Edit, Usuarios } from './pages/index';
import Lateral from './components/Lateral';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';



function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <div id='principal-body'>
          <Lateral/>
          <div>
            <Routes>
              <Route path='/' element={<HomePage/>}/>                     {/* <Route path="/" element={<Home />} /> */}
              <Route path='/Login' element={<LoginPage/>} />              {/* <Route path="/Login" element={<Login />} /> */}
              <Route path='/crear-usuario' element={<CreateUserPage/>} /> 
              <Route path="/Create_User" element={<Create_User />} />
              <Route path="/servicios/salones" element={<Salone />} />
              <Route path="/servicios/comida" element={<Comida />} />
              <Route path="/servicios/musica" element={<Musica />} />
              <Route path="/servicios/bartender" element={<Bartender />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/edit/:id" element={<Edit />}/>
              <Route path="/usuarios" element={<Usuarios />}/>
            </Routes>
          </div>
        </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
