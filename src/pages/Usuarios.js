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
  return (
    <div className='mx-auto bg-danger bg-opacity-25 contenedor py-4' style={{"minHeight":"400px"}}>
      <div className='card border border-dark bg-dark bg-opacity-75 mx-auto' style={{"maxWidth":"600px"}}>
          <div className="text-center">
            <form className="card-body" onSubmit={this.onSubmit}>
                <label className='row'>
                    <span className='text-white col'>Ingresa el nombre del usuario: </span>
                    <input
                      type="string"
                      onChange={this.onChangeDate}
                      className='form-control col pe-4 me-4'
                    />
                </label>
                <button className='btn btn-success mt-2' type="submit">Consultar</button>
            </form>
          </div>
          <div>
            {this.state.users.map(user =>(
            <div key={user._id}>  
              { cookies.get('rol')=="ADMINISTRADOR" && 
                <div className='mx-auto' style={{"maxWidth":"400px"}}>
                  <hr className='text-white'/>
                  <div className='card-body'>
                    <h5 className='card-title text-center text-white'>{user.nombreusuario}</h5>
                    <div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"120px"}} >Email</span>
                        <input type="text" className="form-control text-center" placeholder={user.correo} disabled/>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"120px"}} >Característica</span>
                        <input type="text" className="form-control text-center" placeholder={user.caracteristica} disabled/>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"120px"}}>Celular</span>
                        <input type="text" className="form-control text-center" placeholder={user.celular} disabled/>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"120px"}} >Rol</span>
                        <input type="text" className="form-control text-center" placeholder={user.rol} disabled/>
                      </div>
                      <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"120px"}} >ID</span>
                        <input type="text" className="form-control text-center" placeholder={user.uid} disabled/>
                      </div>
                      { user.caracteristica!='eliminado' &&
                        <div>
                            <div class="row">
                            <Link className="mx-2 col btn btn-success" to={"/edit/" + user.uid}>Editar</Link>
                            <a className="mx-2 col btn btn-danger" onClick={(() => this.deleteUsuario(user.uid))}>Eliminar Usuario</a>
                            </div>
                        </div> 
                      }
                    </div>
                  </div>
                </div> 
              }
            </div>  
              )
            )}
          </div>
      </div>
      
  </div>
  )
}
    
}
