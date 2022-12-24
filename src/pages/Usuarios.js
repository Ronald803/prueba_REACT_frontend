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
        const res = await axios.get(`http://localhost:8080/usuarios?nombreusuario=${this.state.nombreusuariobusqueda}`,{ headers: { "x-token": cookies.get('token') } });
        this.setState({ users: res.data });
        cookies.set('servicio', 'usuarios', {path : "/"});
        console.log(res.data)
      }
      deleteUsuario = async(id) => {
        console.log(id)
        await axios.delete(`http://localhost:8080/usuarios/`+id,{ headers: { "x-token": cookies.get('token') } })
        .then(response => {
          console.log(response.data);
          console.log(response.data.msg);
          return response.data;
        })
        .catch(error => {
          alert(`Lo sentimos. ${error.response.data.msg}`);
        });
        alert(`Usuario eliminado`);
        window.location.href=window.location.href;
      }
    
      render() {
        console.log(this.state.users)
        return (
          <div className='row'>
            <div className='col-md-4'>
              <div className='card card-body'>
                <h3>Ingresa el nombre del usuario:</h3>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <input
                      type="string"
                      className='form-control'
                      onChange={this.onChangeDate}
                    />
                  </div>
                  <button type="submit" className='btn btn-primary'>
                    Consultar
                  </button>
                </form>
              </div>
            </div>
    
            <div className='row'>
              {
                this.state.users.map(user =>
                ( 
                  <div className='col-md-4 p-2' key={user.uid}>  
                  { cookies.get('rol')=="ADMINISTRADOR" && 
                        <div className='card'>
                          <div className='card-header'>
                            <h5>Nombre de Usuario: {user.nombreusuario}</h5>
                          </div>
                          <div className='card-body'>
                            <p>Correo electrónico: {user.correo}</p>
                            <p>Caracteristica: {user.caracteristica}</p>
                            <p>Celular: {user.celular}</p>
                            <p>Rol: {user.rol}</p>
                            <p>ID: {user.uid}</p>
                            { user.caracteristica=='eliminado' ? 
                                <p>ELIMINADO</p>:
                                <div className='card-footer d-flex justify-content-between'>
                                <button className='btn btn-danger' onClick={(() => this.deleteUsuario(user.uid))}>
                                      Eliminar Usuario
                                </button>
                                <Link className='btn btn-secondary' to={"/edit/" + user.uid}>Editar</Link>
                                </div>
                            }
                          </div>
                        </div> 
                        }
                  </div>  
                  )
                )
              }
            </div>
          </div>
        )
      }
    
}
