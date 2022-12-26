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
    return (
      <div class="barra-superior">
      <header>
          <img src="../img/icons/icon_menu.svg" alt="menu" class="logo-menu"/>
          <em>Eventos Gran Poder</em>
          <ul class="header-navegacion">
              <a href="/"><li>Inicio</li></a>
              <a href="/login"><li>Iniciar Sesión</li></a>
              <a href="/Create_user"><li>Registrarse</li></a>
              { cookies.get('rol')=="ADMINISTRADOR" &&
                <a href="/usuarios"><li>Usuarios</li></a>
              }
              { cookies.get('nombreusuario') &&
              <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión ( {cookies.get('nombreusuario')} )</button>}
          </ul>
        </header> 
      </div>
    )
  }
}
