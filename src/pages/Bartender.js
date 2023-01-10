import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Bartender extends Component {
  state = {
    precio: '',
    bartenderpro: '',
    garzones: '',
  }
  
cantidadBartenders= e => {
  this.setState({
    [e.target.name]: e.target.value,
  })
 cookies.set([e.target.name],e.target.value, { path: "/"})
 console.log(e.target.value)
 console.log("bartenders: "+ this.state.bartenders + "Garzones: "+this.state.garzones)
 cookies.set('precio', cookies.get('bartenderpro')*200 + cookies.get('garzones')*50, { path: "/"})
}
  render() {
    return (
      <body class="servicio">
        <section class="tarjetas-contenedor">
            <div class="tarjeta-contenedor flotar">
                    <div class="tarjeta-img">
                        <img src="../img/barman1.jpg" alt="Fotografia de Barman trabajando"/>
                    </div>
                    <div class="tarjeta-descripcion">
                        <h2 class="tarjeta-titulo">Barman</h2>
                        <div class="tarjeta-descripcion-precio">
                            <h2>Bs. <span class="precio-numero">200</span></h2>
                            <ul class="tarjeta-caracteristicas">
                                <li>Atiende pedidos de los invitados en el servicio de barra</li>
                                <li>Show Barman de preparación y elaboración de todo tipo de cocteles</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div class="tarjeta-contenedor flotar">
                    <div class="tarjeta-img">
                        <img src="../img/barman2.jpg" alt="Fotografia de bartenders"/>
                    </div>
                    <div class="tarjeta-descripcion">
                        <h2 class="tarjeta-titulo">Bartenders</h2>
                        <div class="tarjeta-descripcion-precio">
                            <h2>Bs. <span class="precio-numero">50</span></h2>
                            <ul class="tarjeta-caracteristicas">
                                <li>Pieza clave para la atención de los invitados</li>
                                <li>Elegantes, atentos y eficientes, velan que tus invitados tengan una experiencia inolvidable</li>
                            </ul>
                        </div>
                    </div>
            </div>      
        </section>
        <div>
          <Date_finder>bartender</Date_finder>
          <div class="contenedor-derecho contenedor-solicitud-reserva">
              <label>
                <span>Bartender(s):</span>
                <input type="number" class='form-control' name="bartenderpro" onChange={this.cantidadBartenders}/>
              </label>  
              <label>
                <span>Garzones(s):</span>
                <input type="number" class='form-control' name="garzones" onChange={this.cantidadBartenders}/>
              </label>  
              <p>Precio: Bs. {cookies.get('precio')}</p>
          </div> 
          <Request>bartender</Request>
        </div>
      </body>
    )
  }
}


