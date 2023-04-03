import React, { Component } from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie';
import AlgoSalioMal from './Alerts/AlgoSalioMal';
import LoginCorrectly from './Alerts/LoginCorrectly';

const cookies = new Cookies();

export class Request extends Component {
  state = {
    form: {
      salon: '',
      event: '',
      }
  }
  handleChange = async e => {
    await this.setState({
      form: { 
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    if(e.target.name=="salon"){
      cookies.set('salon', this.state.form.salon, {path: "/"});
      }
    //console.log(this.state.form);
  }
  registrarse = async () => {
    const baseUrl = `https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}`; 
    await axios.post(baseUrl, {
                                salon: cookies.get('salon'),
                                servicio: this.props.children,
                                caracteristica: "reservado",
                                evento: this.state.form.event,
                                precio: cookies.get('precio'),
                                fecha: cookies.get('fecha'),
                                nombreusuario: cookies.get('nombreusuario'),
                                bartenderpro: cookies.get('bartenderpro'),
                                garzones: cookies.get('garzones'),
                                plato: cookies.get('plato'),
                                invitados: cookies.get('invitados'),
                                grupo: cookies.get('grupo')
                              }
                            , { headers: { "x-token": cookies.get('token') } })
      .then(response => {
        //console.log(response.data);
        //console.log(response.data.msg);
        //alert('Reserva realizada');
        LoginCorrectly('Reserva realizada')
        return response.data;
      })
      .catch(error => {
        //alert(`Lo sentimos. ${error.response.data.msg}`);
        AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
      })
      window.location.href=window.location.href;
  }

  render() {
    return (
      <div class="contenedor-derecho contenedor-solicitud-reserva">
        <div class="form-selector-fecha" onSubmit={this.onSubmit}>
          <label>
            <span>Nombre de tu evento: </span>
            <input type="text" name="event" onChange={this.handleChange}/>
            { this.props.children!="salones" &&
              <div>            
                    <label>Salón:</label>
                    <select name="salon" id="cursos"   onChange={this.handleChange}>
                      <option value="">Elige una opción</option>
                      <option value="golden">Golden</option>
                      <option value="platinum">Platinum</option>
                      <option value="otro">Otro</option>
                    </select>
                    <br />
              </div>
            }
            <button onClick={() => this.registrarse()} >Reservar</button>
          </label>
        </div>
      </div>
    )
  }
}
