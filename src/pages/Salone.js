import React, { Component,useEffect } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request';

import Cookies from 'universal-cookie';
import Instructions from '../components/Alerts/Instructions';
const cookies = new Cookies();

export class Salone extends Component {

  state = {
    form: {
      salon: 'golden',
      precio: '7000 Bs'
    }
  }
  componentDidMount() {
    Instructions()
  }
  precioSalon = async (e, f) => {
    cookies.set('precio', e, { path: "/" });
    cookies.set('salon', f, { path: "/" })
    await this.setState({
      form: {
        salon: f,
        precio: e,
      }
    })
    //console.log("de state"+this.state.form.salon)
  }
  render() {
    return (
      <div>
        
        <body class="servicio">
          <section class="tarjetas-contenedor">
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioSalon(7000, "golden"))}>
              <div class="tarjeta-img">
                <img src="../img/salongolden.jpg" alt="Fotografia panoramica del Salón" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Salón Golden</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">7000</span></h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Salón de eventos de lujo</li>
                    <li>Capacidad para 150 personas</li>
                    <li>Cuenta con escenario para música en vivo, barra para bebidas, area wifi y parqueo</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioSalon(5000, "platinum"))}>
              <div class="tarjeta-img">
                <img src="../img/salonplatinum.jpg" alt="Fotografia panoramica del Salón" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Salón Platinum</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">5000</span></h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Salón de eventos hermoso, pequeño e íntimo</li>
                    <li>Capacidad para 100 personas</li>
                    <li>Escenario para música en vivo y parqueo</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Date_finder>salones</Date_finder>
            <div class="contenedor-derecho contenedor-solicitud-reserva">
              <p>{"Salon: " + this.state.form.salon}</p>
              <p>{"Precio: Bs. " + this.state.form.precio}</p>
            </div>
            <Request>salones</Request>
          </div>
        </body>
      </div>
    )
  }
}
