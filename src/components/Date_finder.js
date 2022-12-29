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
    const res = await axios.get(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}?fecha=${this.state.date}`);
    this.setState({ users: res.data });
    console.log(res.data)
    cookies.set('fecha', this.state.date, { path: "/" });
    cookies.set('servicio', this.props.children, { path: "/"});
  }

  deleteNote = async(id) => {
    console.log(id)
    await axios.delete(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}/`+id,{ headers: { "x-token": cookies.get('token') } })
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
      <div>
        <div class="contenedor-derecho contenedor-fecha-disponibilidad">
            <form class="form-selector-fecha" onSubmit={this.onSubmit}>
                <label>
                    <span>¿Cuándo requieres nuestros servicios?</span><br/>
                    <span>Consulta la disponibilidad </span>
                    <input
                    type="date"
                    onChange={this.onChangeDate}/>
                    <button type="submit">Consultar</button>
                </label>
            </form>
        </div>
        <div>
          {this.state.users.map(user =>(
            <div key={user._id}>  
              { cookies.get('rol')=="ADMINISTRADOR" ? 
                                <div class="resultado-tarjeta">
                                  <div>
                                    <h5>{user.evento}</h5>
                                  </div>
                                  <div>
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
                                          { user.caracteristica=='eliminado' ? 
                                              <p>ELIMINADO</p>:
                                              <div class="resultado-botones">
                                              <Link class="link" to={"/edit/" + user._id}>Actualizar Reserva</Link>
                                              <a class="boton-eliminar flotar" onClick={(() => this.deleteNote(user._id))}>Eliminar Reserva</a>
                                              </div>
                                              
                                          }
                                      </div> 
                                    }
                                  </div>
                                </div> :
                              <div>{user.caracteristica=='eliminado' ? 
                                <hr/>:
                                <div class="resultado-tarjeta" key={user._id}>
                                  <div >
                                    <div >
                                      <h5>Evento: {user.evento}</h5>
                                    </div>
                                    <div >
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
