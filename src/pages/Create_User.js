import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import LoginCorrectly from '../components/Alerts/LoginCorrectly';
import AlgoSalioMal from '../components/Alerts/AlgoSalioMal';

const baseUrl="https://backend-sistema-reservas.vercel.app/usuarios";
const cookies = new Cookies();


export class Create_User extends Component {
  
    state={
      form:{
          username: '',
          password: '',
          email: '',
          cellphone: '',
      }
  }

  handleChange= async e=>{
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }
  registrarse= async()=>{
    await axios.post(baseUrl, { nombreusuario:  this.state.form.username, 
                                contraseña:     this.state.form.password,
                                correo:         this.state.form.email,
                                celular:        this.state.form.cellphone,
                                caracteristica: "activo",
                                rol:            "usuario"
                              })
    .then(response=>{
      //console.log(response.data);  
      return response.data;
    })
    .then(response=>{
        var respuesta=response.usuario;
        var token=response.token;
        var rol=response.rol;
       cookies.set('id', respuesta.uid, {path: "/"});
       cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
       cookies.set('token',token);
       cookies.set('rol',respuesta.rol);
        //alert(`Bienvenido ${respuesta.nombreusuario}, tu datos fueron registrados correctamente`);
        //window.location.href="./";
        LoginCorrectly(`${respuesta.nombreusuario}, tu datos fueron registrados correctamente`)
        setTimeout(() => {
          window.location.href="./";  
        }, 3000);
    }) 
  
    .catch(error=>{
      console.log(error);
      //alert(`Lo sentimos. ${error.response.data.msg}`);
      AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
    })
  }

  componentDidMount(){
    if(cookies.get('nombreusuario')){
        window.location.href="./"
    }
  }
  render() {
    return (
      
        <div class="contenedor-secundario">
          <div class="contenedor-derecho">
            <label>Nombre Usuario:</label>
            <br/>
              <input 
                type="text"
                
                name="username"
                onChange={this.handleChange}
              />
            <br/>
            <label>Correo electrónico:</label>
            <br/>
              <input 
                type="text"
                
                name="email"
                onChange={this.handleChange}
              />
            <br/>
            <label>Celular:</label>
            <br/>
              <input 
                type="text"
                
                name="cellphone"
                onChange={this.handleChange}
              />
            <br/>

            <label>Contraseña: </label>
            <br/>
                <input
                type="password"
                
                name='password'
                onChange={this.handleChange}
              />
            <br/>
            <button class="resultado-botones" onClick={()=> this.registrarse()} >Registrarse</button>
          </div>
        </div>
      
    );
  }
  }


