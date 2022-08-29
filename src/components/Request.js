import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export class Request extends Component {
  state = {
    form: {
      salon: '',
      event: '',
      bartenderpro: ' ',
      garzones: ' ',
      plato: '',
      invitados: '',
      grupo: '',
    }
  }
  handleChange = async e => {
    await this.setState({
      form: { 
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }
  registrarse = async () => {
    const baseUrl = `http://localhost:8080/servicios/${this.props.children}`; 
    await axios.post(baseUrl, {
                                salon: this.state.form.salon,
                                servicio: this.props.children,
                                caracteristica: "reservado",
                                evento: this.state.form.event,
                                precio: "1000",
                                fecha: cookies.get('fecha'),
                                nombreusuario: cookies.get('nombreusuario'),
                                bartenderpro: this.state.form.bartenderpro,
                                garzones: this.state.form.garzones,
                                plato: this.state.form.plato,
                                invitados: this.state.form.invitados,
                                grupo: this.state.form.grupo
                              }
                            , { headers: { "x-token": cookies.get('token') } })
      .then(response => {
        console.log(response.data);
        console.log(response.data.msg);
        alert('Reserva realizada');
        return response.data;
      })
      .catch(error => {
        alert(`Lo sentimos. ${error.response.data.msg}`);
      })
      window.location.href=window.location.href;
  }

  render() {
    return (
      <div>
        
        <div className='containerPrincipal'>
          <div className='containerSecundario'>
            <div className='form-group'>

              <label>Salón:   !</label>
              <select name="salon" id="cursos" onChange={this.handleChange}>
                <option value="">Elige una opción</option>
                <option value="golden">Golden</option>
                <option value="platinum">Platinum</option>
                <option value="otro">Otro</option>
              </select>
              <br />
              <label>Evento:</label>
              <br />
              <input
                type="text"
                className='form-control'
                name="event"
                onChange={this.handleChange}
              />
              <br />
              { this.props.children=="bartender" &&
                    <div>
                        <label>Bartenders:</label> <br />
                        <input type="number" className='form-control' name="bartenderpro" onChange={this.handleChange}/> <br />
                        <label>Garzones:</label> <br />
                        <input type="number" className='form-control' name="garzones" onChange={this.handleChange}/> <br />
                    </div> 
              }
              { this.props.children=="comida" &&
                    <div>
                        <label>Plato:</label> <br />
                        <input type="text" className='form-control' name="plato" onChange={this.handleChange}/> <br />
                        <label>Invitados:</label> <br />
                        <input type="number" className='form-control' name="invitados" onChange={this.handleChange}/> <br />
                    </div> 
              }
              { this.props.children=="musica" &&
                    <div>
                        <label>Artista:</label> <br />
                        <input type="text" className='form-control' name="grupo" onChange={this.handleChange}/> <br />
                    </div> 
              }
              <button className='btn btn-primary' onClick={() => this.registrarse()} >Reservar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
