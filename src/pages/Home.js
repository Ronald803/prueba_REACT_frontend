import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export class Home extends Component {
  render() {
    console.log(cookies.get('nombreusuario'));
    console.log(cookies.get('rol'));
    console.log(cookies.get('token'));
    return (
      <div class="contenedor-home">
        <a href="/servicios/salones">
          <div class="tarjeta-home flotar">
            <img src="../img/salongolden.jpg" alt="Fotografia panoramica del Salón"/>
          </div>  
        </a>
        <a href="/servicios/salones">
          <div class="tarjeta-home flotar">
            <img src="../img/salonplatinum.jpg" alt="Fotografia panoramica del Salón"/>
          </div>
        </a>
        <a href="/servicios/comida">
          <div class="tarjeta-home flotar">
              <img src="../img/lechonhorno.jpg" alt="Fotografia plato lechon al horno"/>
          </div>
        </a>
        <a href="/servicios/comida">
          <div class="tarjeta-home flotar">
              <img src="../img/piquemacho.webp" alt="Fotografia plato Pique Macho"/>
          </div>
        </a>
        <a href="/servicios/musica">
          <div class="tarjeta-home flotar">
              <img src="../img/saborsabor.jpg" alt="Fotografia grupo musical Sabor Sabor"/>
          </div>
        </a>
        <a href="/servicios/musica">
          <div class="tarjeta-home flotar">
              <img src="../img/jambao.webp" alt="Fotografia grupo musical Jambao"/>
          </div>
        </a>
        <a href="/servicios/musica">
          <div class="tarjeta-home flotar">
              <img src="../img/kalamarka.jpg" alt="Fotografia grupo musical Kalamarca"/>
          </div>
        </a>
        <a href="/servicios/bartender">
          <div class="tarjeta-home flotar">
              <img src="../img/barman1.jpg" alt="Fotografia de Barman trabajando"/>
          </div>
        </a>
        <a href="/servicios/bartender">
          <div class="tarjeta-home flotar">
              <img src="../img/barman2.jpg" alt="Fotografia de bartenders"/>
          </div>
        </a>
      </div>

    )
  }
}
