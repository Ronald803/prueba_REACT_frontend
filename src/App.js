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
import SalonePage from './pages/SalonePage';
import ComidaPage from './pages/ComidaPage';
import MusicaPage from './pages/MusicaPage';
import BartenderPage from './pages/BartenderPage';
import Login_CreateUser from './pages/Login_CreateUser';



function App() {
  return (
    <BrowserRouter>
      <Navigation/>
        <div id='' className='justify-content-center align-items-center' >
          {/* <Lateral/> */}
          <div>
            <Routes>
              <Route path='/' element={<HomePage/>}/>                           {/* <Route path="/" element={<Home />} /> */}
              <Route path='/Login' element={<Login_CreateUser/>} />                    {/* <Route path="/Login" element={<Login />} /> */}
              <Route path='/Create_User' element={<Login_CreateUser/>} />         {/* <Route path="/Create_User" element={<Create_User />} /> */}
              <Route path='/servicios/salones' element={<SalonePage/>} />       {/* <Route path="/servicios/salones" element={<Salone />} /> */}
              <Route path='/servicios/comida' element={<ComidaPage/>} />        {/* <Route path="/servicios/comida" element={<Comida />} /> */}
              <Route path='/servicios/musica' element={<MusicaPage/>} />        {/* <Route path="/servicios/musica" element={<Musica />} /> */}
              <Route path='/servicios/bartender' element={<BartenderPage/>} />  {/* <Route path="/servicios/bartender" element={<Bartender />} /> */}
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
