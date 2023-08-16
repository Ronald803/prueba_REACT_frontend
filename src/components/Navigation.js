import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import NavBar from './navbar'
const cookies = new Cookies();

export default class Navigation extends Component {
  cerrarSesion=()=>{
    cookies.remove("nombreusuario",{path: "/"});
    cookies.remove("id", {path: "/"});
    cookies.remove("token", {path: "/"});
    cookies.remove("rol",{path: "/"});
    window.location.href='/Login'
  }
  render() {
  return (
    <nav class="navbar navbar-expand-lg bg-danger" style={{"height":"70px","zIndex":"100"}}>
      <div class="container-fluid ">
        <a class="navbar-brand text-white" href="/">Eventos Gran Poder</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
          <ul class="navbar-nav bg-danger text-end pe-4">
            <li class="nav-item">
              <a class="nav-link active text-white " aria-current="page" href="/servicios/salones">Salones</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/servicios/comida">Comida</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/servicios/musica">Música</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/servicios/bartender">Bartender</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="/login">Iniciar Sesión</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="/Create_user">Registrarse</a>
            </li>
            {
              cookies.get('rol') == 'ADMINISTRADOR'
              &&
              <li className='nav-item'>
                <a class="nav-link text-white" href="/usuarios">Usuarios</a>  
              </li>
            }
            {
              cookies.get('nombreusuario') 
              &&
              <li className='nav-item'>
                <button class="nav-link" onClick={()=>this.cerrarSesion()}>Cerrar Sesión ({cookies.get('nombreusuario')})</button>  
              </li>
            }
          </ul>
        </div>
      </div>
  </nav>
    )
  }
}
    // <div class="barra-superior">
    //   <header>
    //       <NavBar/>
    //       <em><a href="/">Eventos Gran Poder</a></em>
    //       <ul class="header-navegacion">
    //           <a href="/"><li>Inicio</li></a>
    //           <a href="/login"><li>Iniciar Sesión</li></a>
    //           <a href="/Create_user"><li>Registrarse</li></a>
    //           { cookies.get('rol')=="ADMINISTRADOR" &&
    //             <a href="/usuarios"><li>Usuarios</li></a>
    //           }
    //           { cookies.get('nombreusuario') &&
    //           <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión ( {cookies.get('nombreusuario')} )</button>}
    //       </ul>
    //     </header>
        
    //   </div>
