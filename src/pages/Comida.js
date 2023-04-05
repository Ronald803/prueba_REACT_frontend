import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
import Instructions from '../components/Alerts/Instructions';
const cookies = new Cookies();


export class Comida extends Component {

  state = {
    plato: '',
    precio: '',
    precioPlato: '',
    invitados: '',
  }
  componentDidMount() {
    //Instructions()
  }
  precioPlatoComida = async (e, f) => {
    cookies.set('plato', f, { path: "/" })
    await this.setState({
      plato: f,
      precioPlato: e,
      precio: e * cookies.get('invitados'),
    })
    cookies.set('precio', e * cookies.get('invitados'), { path: "/" });
  }
  cantidadInvitados = e => {
    this.setState({
      invitados: e.target.value,
      precio: e.target.value * this.state.precioPlato,
    })
    cookies.set('invitados', e.target.value, { path: "/" })
    cookies.set('precio', e.target.value * this.state.precioPlato, { path: "/" })

    console.log(e.target.value)
  }
  render() {
    return (
      <div>
        
        <body class="servicio">
          <section class="tarjetas-contenedor">
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioPlatoComida(15, "Lechon"))}>
              <div class="tarjeta-img">
                <img src="../img/lechonhorno.jpg" alt="Fotografia plato lechon al horno" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Lechón al horno</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">15</span> el plato</h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Lechón crocante al horno con sabor a casa "Cheff Janne"</li>
                    <li>Guarniciones: papa, camote, postre, choclos tiernos</li>
                    <li>Ensalada y llajuita incluidas</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="tarjeta-contenedor flotar" onClick={(() => this.precioPlatoComida(20, "Pique Macho"))}>
              <div class="tarjeta-img">
                <img src="../img/piquemacho.webp" alt="Fotografia plato Pique Macho" />
              </div>
              <div class="tarjeta-descripcion">
                <h2 class="tarjeta-titulo">Pique Macho</h2>
                <div class="tarjeta-descripcion-precio">
                  <h2>Bs. <span class="precio-numero">20</span> el plato</h2>
                  <ul class="tarjeta-caracteristicas">
                    <li>Sabroso y picantito</li>
                    <li>Papas fritas en gajos, carne de res, chorizo, huevo duro, cebolla, tomate</li>
                    <li>Aderezos incluidos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div>
            <Date_finder>comida</Date_finder>
            <div class="contenedor-derecho contenedor-solicitud-reserva">
              <label>
                <span>Invitados:</span>
                <input type="number" className='form-control' name="invitados" onChange={this.cantidadInvitados} />
              </label>
              <p>{"Plato: " + this.state.plato}</p>
              <p>{"Precio: Bs. " + this.state.precio}</p>
            </div>
            <Request>comida</Request>
          </div>
        </body>
      </div>
    )
  }
}
