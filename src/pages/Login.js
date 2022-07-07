import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:8080/auth/login";
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
    window.location.href='/Create_User'
  }
  iniciarSesion= async()=>{
    await axios.post(baseUrl, {correo: this.state.form.username, contraseña: this.state.form.password})
    .then(response=>{
      console.log(response.data);  
      return response.data;
    })
    .then(response=>{
        var respuesta=response.usuario;
        var token=response.token
        cookies.set('id', respuesta.uid, {path: "/"});
        cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
        cookies.set('token',token)
        alert(`Bienvenido ${respuesta.nombreusuario}`);
        window.location.href="./";
      
    }) 
  
    .catch(error=>{
      console.log(error);
      alert('El correo o la contraseña no son correctos');
    })
  }

  componentDidMount(){
    if(cookies.get('nombreusuario')){
        window.location.href="./"
    }
  }
  render() {
    return (
      <div className='containerPrincipal'>
        <div className='containerSecundario'>
          <div className='form-group'>
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
            <button className='btn btn-primary' onClick={()=> this.iniciarSesion()} >Iniciar Sesión</button>
            <button className='btn btn-primary' onClick={()=> this.CrearUsuario()} >Crear Usuario</button>
          </div>
        </div>
      </div>
    );
  }
}
