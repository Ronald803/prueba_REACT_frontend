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
        LoginCorrectly('Reserva realizada')
      })
      .catch(error => {
        AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
      })
  }

  render() {
    return (
      <div class="px-2" onSubmit={this.onSubmit}>
        <div className="input-group mb-2">
          <span className="input-group-text" style={{"minWidth":"90px"}}>Evento</span>
          <input 
            type="text" 
            className="form-control text-center" 
            placeholder='Ej. "Fiesta de Graduación"'
            onChange={this.handleChange}
            name="event"
          />
          { this.props.children!="salones" &&
            <div className='input-group mt-3'>            
              <label className='input-group-text' style={{"minWidth":"90px"}}>Salón:</label>
              <select className='form-control ' name="salon" id="cursos"   onChange={this.handleChange}>
                <option value="">Elige una opción</option>
                <option value="golden">Golden</option>
                <option value="platinum">Platinum</option>
                <option value="otro">Otro</option>
              </select>
              <br />
            </div>
          }
        </div>
        <div className='text-center mb-2'>
          <button onClick={() => this.registrarse()} className='btn btn-danger' >Reservar</button>  
        </div>
      </div>
      
    )
  }
}

{/* <label>
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
          </label> */}