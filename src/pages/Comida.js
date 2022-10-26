import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


export  class Comida extends Component {

  state = {
      plato: '',
      precio: '',
      precioPlato: '',
      invitados: '',
    }
    precioPlatoComida = async (e,f) => {
    cookies.set('plato',f, { path: "/" })
    await this.setState({
        plato: f,
        precioPlato: e,
        precio: e* cookies.get('invitados'),
    })
    cookies.set('precio',e* cookies.get('invitados'),{path: "/"});
    }
  cantidadInvitados = e => {
    this.setState({
      invitados: e.target.value,
      precio: e.target.value* this.state.precioPlato,
    })
    cookies.set('invitados',e.target.value, { path: "/"})
    cookies.set('precio', e.target.value* this.state.precioPlato,{ path:"/"})
     
   console.log(e.target.value)
  }
  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active " data-bs-pause="true"  onClick={ (()=> this.precioPlatoComida(15,"Lechon")) }>
                <img src="../img/lechonhorno.jpg" className="d-block w-100 " alt="slide1" />
            </div>

            <div className="carousel-item " data-bs-pause="true" onClick={ (()=> this.precioPlatoComida(20,"Pique Macho")) }>
                <img src="../img/piquemacho.webp" className="d-block w-100  " alt="slide2"/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        
      <Date_finder>comida</Date_finder>
        <div>
          <h1>{"Plato " + this.state.plato}</h1>  
          <h1>{"Precio "+ this.state.precio + " Bs."}</h1>
        </div>
      <Request>comida</Request>
          <div>
              <label>Invitados:</label> <br />
              <input type="number" className='form-control' name="invitados" onChange={this.cantidadInvitados}/> <br />
          </div> 
      </div>
    )
  }
}
