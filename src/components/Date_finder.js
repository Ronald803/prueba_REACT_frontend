import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
const cookies = new Cookies();
export default class Date_finder extends Component {

  state = {
    users: [],
    date: '',
    respuesta: false
  }
  async componentDidMount() {
    //console.log(this.state.users)
    //console.log("componentdidmount")
  }

  onChangeDate = (e) => {
    //console.log(e.target.value)
    this.setState({
      date: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault();
    const res = await axios.get(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}?fecha=${this.state.date}`);
    this.setState({ users: res.data });
    //console.log(res.request.status)
    //console.log(res)
    if(this.state.date !="" && res.request.status == 200){
      //console.log("se hizo una petición correcta con fecha");
      this.state.respuesta = true;
    }
    cookies.set('fecha', this.state.date, { path: "/" });
    cookies.set('servicio', this.props.children, { path: "/"});
  }

  deleteNote = async(id) => {
    //console.log(id)
    await axios.delete(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}/`+id,{ headers: { "x-token": cookies.get('token') } })
    .then(response => {
      //console.log(response.data);
      //console.log(response.data.msg);
      return response.data;
    })
    .catch(error => {
      alert(`Lo sentimos. ${error.response.data.msg}`);
    });
    alert(`Reserva eliminada`);
    window.location.href=window.location.href;
  }

  render() {
    const respuesta = this.state.users;
    const disponible = {
      golden: "",
      platinum: "",
      "Sabor Sabor": "",
      Jambao: "",
      Kalamarka: ""
    };
    let disponibilidad = `Para el: ${this.state.date} todo el servicio está DISPONIBLE.`;
    respuesta.map( (element)=>{
      if(element.caracteristica!=="eliminado"){
        if(element.servicio==="salones"){
          disponible[element.salon] = "NO DISPONIBLE";
          disponibilidad = undefined
        } else if(element.servicio==="musica"){
          disponible[element.grupo] = "NO DISPONIBLE";
          disponibilidad = undefined
        } 
      } 
    })
    //console.log(disponibilidad);
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
            { this.state.respuesta &&
                <div class="resultado-disponibilidad">
                {this.state.respuesta === true && <p>{disponibilidad}</p>}
                {disponible.golden !== "" && <div><hr/><p>Salón Golden:</p><p>{disponible.golden}</p><hr/></div>}
                {disponible.platinum !== "" && <div><hr/><p>Salón Platinum:</p><p>{disponible.platinum}</p><hr/></div>}
                {disponible["Sabor Sabor"] !== "" && <div><hr/><p>Grupo Sabor Sabor:</p><p>{disponible["Sabor Sabor"]}</p><hr/></div>}
                {disponible.Kalamarka !== "" && <div><hr/><p>Grupo Kalamarka:</p><p>{disponible.Kalamarka}</p><hr/></div>}
                {disponible.Jambao !== "" && <div><hr/><p>Grupo Jambao:</p><p>{disponible.Jambao}</p><hr/></div>}
                </div>
            }
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
                                    <p>Precio: {user.precio}</p>
                                    <p>nombreusuario: {user.nombreusuario}</p>
                                    { user.caracteristica=='eliminado' ? 
                                        <p>ELIMINADO</p>:
                                        <div class="resultado-botones">
                                          <Link class="link flotar" to={"/edit/" + user._id}>Actualizar Reserva</Link>
                                          <a class="boton-eliminar flotar" onClick={(() => this.deleteNote(user._id))}>Eliminar Reserva</a>
                                        </div>
                                    }
                                  </div>
                                </div> :
                              <div>{user.caracteristica!=='eliminado' &&
                                    
                                <div key={user._id}>
                                  <p>Este es un evento que tenemos agendado para la fecha {this.state.date}:</p>
                                  <div class="resultado-tarjeta">
                                    <div >
                                      <h5>Evento: {user.evento}</h5>
                                    </div>
                                    <div >
                                      <p>Salón: {user.salon}</p>
                                      {this.props.children=="musica" && <p>Artista: {user.grupo}</p>}
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
