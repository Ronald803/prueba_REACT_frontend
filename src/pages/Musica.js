import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
import Instructions from '../components/Alerts/Instructions';
const cookies = new Cookies();

export class Musica extends Component {
  state = {
    form: {
      grupo: '',
      precio: '',
    }
  }
  componentDidMount() {
    //Instructions()
  }
  precioSalon = async (e, f) => {
    cookies.set('precio', e, { path: "/" });
    cookies.set('grupo', f, { path: "/" })
    await this.setState({
      form: {
        grupo: f,
        precio: e,
      }
    })
  }
  render() {
    return (
      <div>
        
        <body class="servicio">
          <section class="tarjetas-contenedor">
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioSalon(10000, "Sabor Sabor"))}>
              <div class="tarjeta-img">
                <img src="../img/saborsabor.jpg" alt="Fotografia grupo musical Sabor Sabor" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Sabor Sabor</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">10000</span></h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>"Vida hay una sola, así que a disfrutar con la compañía de nuestra cumbia con sabor"</li>
                    <li>Más de 12 músicos en escena</li>
                    <li>Ameniza tu acontecimiento junto a sus éxitos: "Amor mío", "Tú me vas a dejar", "Quién no lloro por amor" y mucho más.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioSalon(12000, "Jambao"))}>
              <div class="tarjeta-img">
                <img src="../img/jambao.webp" alt="Fotografia grupo musical Jambao" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Jambao</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">12000</span></h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Cumbia Argentina sonidera</li>
                    <li>Más de 20 años de éxitos</li>
                    <li>Ameniza tu acontecimiento junto a sus éxitos: "Mi niña hermosa", "Lo que me duele", "La tengo que olvidar" y más.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioSalon(14000, "Kalamarka"))}>
              <div class="tarjeta-img">
                <img src="../img/kalamarka.jpg" alt="Fotografia grupo musical Kalamarca" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Kalamarka</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">14000</span></h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Lo mejor de la música andino amazónico</li>
                    <li>Ameniza tu acontecimiento junto a sus éxitos: "Cuando florezca el chuño", "Ama Sua, Ama Llulla, Ama Kella", "Pastorcita", "Jaguar" y mucho más.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Date_finder>musica</Date_finder>
            <div class="contenedor-derecho contenedor-solicitud-reserva">
              <p>Artista: {this.state.form.grupo}</p>
              <p>Precio: Bs. {this.state.form.precio}</p>
            </div>
            <Request>musica</Request>
          </div>
        </body>
      </div>
    )
  }
}
