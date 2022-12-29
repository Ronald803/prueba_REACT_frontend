import React, { Component } from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie';

const baseUrl="https://backend-sistema-reservas.vercel.app/auth/login";
const cookies = new Cookies();


export class Login extends Component {
  state={
      form:{
          username: '',
          password: '',
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
  CrearUsuario=()=>{
    console.log("click en boton crear usuario")
    window.location.href='/Create_user'
  }
  iniciarSesion= async()=>{
    await axios.post(baseUrl, {correo: this.state.form.username, contraseña: this.state.form.password})
    .then(response=>{
      console.log(response.data);  
      return response.data;
    })
    .then(response=>{
        var respuesta=response.usuario;
        var token=response.token;
        var rol=response.rol;
        cookies.set('id', respuesta.uid, {path: "/"});
        cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
        cookies.set('token',token, {path:"/"});
        cookies.set('rol',respuesta.rol, {path:"/"});
        alert(`Bienvenido ${respuesta.nombreusuario}`);
        window.location.href="./";
      
    }) 
  
    .catch(error=>{
      console.log(error);
      alert(`Lo sentimos. ${error.response.data.msg}`);
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
              <label>Usuario:</label>
              <br/>
                <input 
                  type="text"
                  className='form-control'
                  name="username"
                  onChange={this.handleChange}
                />
              <br/>
              <label>Contraseña: </label>
              <br/>
                  <input
                  type="password"
                  className='form-control'
                  name='password'
                  onChange={this.handleChange}
                />
              <br/>
              <button class="resultado-botones" onClick={()=> this.iniciarSesion()} >Iniciar Sesión</button>
              <button class="resultado-botones" onClick={()=> this.CrearUsuario()} >Crear Usuario</button>
            </div>  
          </div>
    );
  }
}
