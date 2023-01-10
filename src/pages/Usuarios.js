import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Usuarios extends Component {
    state = {
        users: [],
        nombreusuariobusqueda: '',
      }
    onChangeDate = (e) => {
        this.setState({
          nombreusuariobusqueda: e.target.value
        })
      }
      onSubmit = async e => {
        e.preventDefault();
        const res = await axios.get(`https://backend-sistema-reservas.vercel.app/usuarios?nombreusuario=${this.state.nombreusuariobusqueda}`,{ headers: { "x-token": cookies.get('token') } });
        this.setState({ users: res.data });
        cookies.set('servicio', 'usuarios', {path : "/"});
        //console.log(res.data)
      }
      deleteUsuario = async(id) => {
        //console.log(id)
        await axios.delete(`https://backend-sistema-reservas.vercel.app/usuarios/`+id,{ headers: { "x-token": cookies.get('token') } })
        .then(response => {
          //console.log(response.data);
          //console.log(response.data.msg);
          return response.data;
        })
        .catch(error => {
          alert(`Lo sentimos. ${error.response.data.msg}`);
        });
        alert(`Usuario eliminado`);
        window.location.href=window.location.href;
      }
    
      render() {
        //console.log(this.state.users)
        return (
          <div>
            <br/>
            <div class="contenedor-derecho contenedor-fecha-disponibilidad">
              <form class="form-selector-fecha" onSubmit={this.onSubmit}>
                  <label>
                      <span>Ingresa el nombre del usuario: </span>
                      <input
                      type="string"
                      onChange={this.onChangeDate}/>
                      <button type="submit">Consultar</button>
                  </label>
              </form>
            </div>
            <div>
            {this.state.users.map(user =>(
            <div key={user._id}>  
              { cookies.get('rol')=="ADMINISTRADOR" && 
                <div class="resultado-tarjeta">
                  <div>
                    <h5>Nombre usuario {user.nombreusuario}</h5>
                  </div>
                  <div>
                    <p>Correo electrónico: {user.correo}</p>
                    <p>Característica: {user.caracteristica}</p>
                    <p>Celular: {user.celular}</p>
                    <p>Rol: {user.rol}</p>
                    <p>ID: {user.uid}</p>
                    { user.caracteristica!='eliminado' &&
                      <div>
                          <div class="resultado-botones">
                          <Link class="link" to={"/edit/" + user.uid}>Editar</Link>
                          <a class="boton-eliminar flotar" onClick={(() => this.deleteUsuario(user.uid))}>Eliminar Usuario</a>
                          </div>
                      </div> 
                    }
                    
                  </div>
                </div> 
              }
            </div>  
              )
            )}
          </div>
        </div>
      )
    }
    
}
