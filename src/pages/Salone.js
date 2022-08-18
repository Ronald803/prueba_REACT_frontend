import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const baseUrl = "http://localhost:8080/servicios/salones";
const cookies = new Cookies();

export class Salone extends Component {
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
    console.log(this.state.form);
  }
  registrarse = async () => {
    await axios.post(baseUrl, {
                                salon: this.state.form.salon,
                                servicio: "salon",
                                caracteristica: "reservado",
                                evento: this.state.form.event,
                                precio: "1000",
                                fecha: cookies.get('fecha'),
                                nombreusuario: cookies.get('nombreusuario')
                              }
                            , { headers: { "x-token": cookies.get('token') } })
      .then(response => {
        console.log(response.data);
        console.log(response.data.msg);
        return response.data;
      })
      /*   .then(response=>{
             var respuesta=response.usuario;
             var token=response.token
            cookies.set('id', respuesta.uid, {path: "/"});
            cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
            cookies.set('token',token)
             alert(`Bienvenido ${respuesta.nombreusuario}, tu datos fueron registrados correctamente`);
             window.location.href="./";
         }) 
       */
      .catch(error => {
        alert(`Lo sentimos. ${error.response.data.msg}`);
      })
      window.location.href=`./`
  }

  render() {
    return (
      <div>
        <Date_finder>salones</Date_finder>
        <div className='containerPrincipal'>
          <div className='containerSecundario'>
            <div className='form-group'>

              <label>Salón:   !</label>
              <select name="salon" id="cursos" onChange={this.handleChange}>
                <option value="">Elige una opción</option>
                <option value="golden">Golden</option>
                <option value="platinum">Platinum</option>
                <option value="otro">Otro</option>
              </select>
              <br />
              <label>Evento:</label>
              <br />
              <input
                type="text"
                className='form-control'
                name="event"
                onChange={this.handleChange}
              />
              <br />
              <button className='btn btn-primary' onClick={() => this.registrarse()} >Reservar</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
