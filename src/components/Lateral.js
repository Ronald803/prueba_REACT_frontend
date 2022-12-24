import React, { Component } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Lateral extends Component {
   render() {
    console.log(`Esta es una prueba ${cookies.get('nombreusuario')}`);
    return (
        <section  class="barra-nav-lateral">
            <a href="/"><div class="flotar">Inicio</div></a>
            <a href="/servicios/salones"><div class="flotar">Salones</div></a>
            <a href="/servicios/comida"><div class="flotar">Comida</div></a>
            <a href="/servicios/musica"><div class="flotar">Música</div></a>
            <a href="/servicios/bartender"><div class="flotar">Bartender</div></a>
            <a href="/usuarios"><div class="flotar">Usuarios</div></a>
        </section>
    )
  }
}
