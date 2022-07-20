import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';

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
    console.log(`Esta es una prueba ${cookies.get('nombreusuario')}`);
    return (
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid p-3">
          <Link className='navbar-brand ' to="/">
              Eventos Gran Poder
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios/salones">Salones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios/comida">Comida</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios/musica">Música</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/servicios/bartender">Bartender</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Iniciar Sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Create_User">Registrarse</Link>
              </li>
            </ul>
          </div>
          { cookies.get('nombreusuario') &&
            <button onClick={()=>this.cerrarSesion()}>Cerrando Sesión ( {cookies.get('nombreusuario')} )</button>}
        </div>
      </nav>
    )
  }
}
