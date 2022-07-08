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
        console.log(error);
        alert('El correo o la contraseña no son correctos');
      })
  }






  render() {
    return (
      <div>Salone
        <Date_finder>salones</Date_finder>
        <div className='containerPrincipal'>
          <div className='containerSecundario'>
            <div className='form-group'>

              <label>Salón:</label>
              <br />
              <input
                type="text"
                className='form-control'
                name="salon"
                onChange={this.handleChange}
              />
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
