import React, { Component } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Footer extends Component {
   render() {
    return (
        <footer>
            <ul class="inactivo mobile-menu">
              <a href="/"><li>Inicio</li></a>
              <a href="/login"><li>Iniciar Sesión</li></a>
              <a href="/Create_user"><li>Registrarse</li></a>
              { cookies.get('rol')=="ADMINISTRADOR" &&
                <a href="/usuarios"><li>Usuarios</li></a>
              }
              { cookies.get('nombreusuario') &&
              <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión ( {cookies.get('nombreusuario')} )</button>}
              <hr/>
              <a href="/"><div class="flotar">Inicio</div></a>
              <a href="/servicios/salones"><div class="flotar">Salones</div></a>
              <a href="/servicios/comida"><div class="flotar">Comida</div></a>
              <a href="/servicios/musica"><div class="flotar">Música</div></a>
              <a href="/servicios/bartender"><div class="flotar">Bartender</div></a>
            </ul>
            <div>C. Ricardo Bustamante #867 Z. Gran Poder</div>
            <div>Telefono +591 2 491926</div>
            <div>Celular +591 74582356</div>
            <div>eventos_gran_poder@gmail.com</div>
        </footer>
    )
  }
}