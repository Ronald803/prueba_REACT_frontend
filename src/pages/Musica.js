import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Musica extends Component {
  state = {
    form: {
      grupo: '',
      precio: '',
    }
  }
  precioSalon = async (e,f) => {
    cookies.set('precio', e , { path: "/" });
    cookies.set('grupo',f, { path: "/" })
    await this.setState({
      form: {
        grupo: f,
        precio: e,
      }
    })
  }
  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active " data-bs-pause="true"  onClick={ (()=> this.precioSalon(10000,"Sabor Sabor")) }>
                <img src="../img/saborsabor.jpg" className="d-block w-100 " alt="slide1" />
            </div>

            <div className="carousel-item " data-bs-pause="true" onClick={ (()=> this.precioSalon(12000,"Jambao")) }>
                <img src="../img/jambao.webp" className="d-block w-100  " alt="slide2"/>
            </div>

            <div className="carousel-item " data-bs-pause="true" onClick={ (()=> this.precioSalon(14000,"Kalamarka")) }>
                <img src="../img/kalamarka.jpg" className="d-block w-100  " alt="slide2"/>
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
      <Date_finder>musica</Date_finder>
      <h1>Artista: {this.state.form.grupo}</h1>
      <h1>Precio: {this.state.form.precio}</h1>
      <Request>musica</Request>
      </div>
    )
  }
}
