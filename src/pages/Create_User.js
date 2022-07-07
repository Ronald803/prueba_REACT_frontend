import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const baseUrl="http://localhost:8080/usuarios";
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
      console.log(response.data);  
      return response.data;
    })
    .then(response=>{
        var respuesta=response.usuario;
        var token=response.token
       cookies.set('id', respuesta.uid, {path: "/"});
       cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
       cookies.set('token',token)
        alert(`Bienvenido ${respuesta.nombreusuario}, tu datos fueron registrados correctamente`);
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
            <label>Nombre Usuario:</label>
            <br/>
              <input 
                type="text"
                className='form-control'
                name="username"
                onChange={this.handleChange}
              />
            <br/>
            <label>Correo electrónico:</label>
            <br/>
              <input 
                type="text"
                className='form-control'
                name="email"
                onChange={this.handleChange}
              />
            <br/>
            <label>Celular:</label>
            <br/>
              <input 
                type="text"
                className='form-control'
                name="cellphone"
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
            <button className='btn btn-primary' onClick={()=> this.registrarse()} >Registrarse</button>
          </div>
        </div>
      </div>
    );
  }
  }


