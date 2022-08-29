import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
const cookies = new Cookies();
export default class Date_finder extends Component {

  state = {
    users: [],
    date: '',
    disponible: true
  }
  async componentDidMount() {
    console.log(this.state.users)
    console.log("componentdidmount")
  }

  onChangeDate = (e) => {
    console.log(e.target.value)
    this.setState({
      date: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    const res = await axios.get(`http://localhost:8080/servicios/${this.props.children}?fecha=${this.state.date}`);
    this.setState({ users: res.data });
    console.log(res.data)
    cookies.set('fecha', this.state.date, { path: "/" });
    cookies.set('servicio', this.props.children, { path: "/"});
  }

  deleteNote = async(id) => {
    console.log(id)
    await axios.delete(`http://localhost:8080/servicios/${this.props.children}/`+id,{ headers: { "x-token": cookies.get('token') } })
    .then(response => {
      console.log(response.data);
      console.log(response.data.msg);
      return response.data;
    })
    .catch(error => {
      alert(`Lo sentimos. ${error.response.data.msg}`);
    });
    alert(`Reserva eliminada`);
    window.location.href=window.location.href;
  }

  render() {
    console.log(this.state.users)
    return (
      <div className='row'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Ingresa la fecha</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type="date"
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
              <div className='col-md-4 p-2' key={user._id}>  
              { cookies.get('rol')=="ADMINISTRADOR" ? 
                                <div className='card'>
                                  <div className='card-header'>
                                    <h5>Evento: {user.evento}</h5>
                                  </div>
                                  <div className='card-body'>
                                    <p>Salón: {user.salon}</p>
                                    <p>Fecha: {user.fecha}</p>
                                    <p>Servicio: {user.servicio}</p>
                                    {this.props.children=="bartender" &&
                                      <div>
                                        <p>Bartenders: {user.bartenderpro}</p>
                                        <p>Garzones: {user.garzones}</p>
                                      </div>
                                      }
                                    {this.props.children=="musica" &&
                                      <div>
                                        <p>Artista: {user.grupo}</p>
                                      </div>
                                    }
                                    {this.props.children=="comida" &&
                                      <div>
                                        <p>Plato: {user.plato}</p>
                                        <p>Invitados: {user.invitados}</p>
                                      </div>
                                    }
                                    { cookies.get('rol')=="ADMINISTRADOR" &&
                                      <div>
                                          <p>Precio: {user.precio}</p>
                                          <p>nombreusuario: {user.nombreusuario}</p>
                                          <p>ID: {user._id}</p>
                                          { user.caracteristica=='eliminado' ? 
                                              <p>ELIMINADO</p>:
                                              <div className='card-footer d-flex justify-content-between'>
                                              <button className='btn btn-danger' onClick={(() => this.deleteNote(user._id))}>
                                                  Eliminar Reserva
                                              </button>
                                              
                                              <Link className='btn btn-secondary' to={"/edit/" + user._id}>
                                              Editar
                                              </Link>
                                              
                                              </div>
                                          }
                                      </div> 
                                    }
                                  </div>
                                </div> :
                              <div>
                              { user.caracteristica=='eliminado' ? 
                                              <p>ELIMINADO</p>:
                                              <div className='col-md-4 p-2' key={user._id}>
                                              <div className='card'>
                                                <div className='card-header'>
                                                  <h5>Evento: {user.evento}</h5>
                                                </div>
                                                <div className='card-body'>
                                                  <p>Salón: {user.salon}</p>
                                                  <p>Fecha: {user.fecha}</p>
                                                  <p>Servicio: {user.servicio}</p>
                                                </div>
                                              </div>
                              </div>
                                          }
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
