import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Salone extends Component {

  state = {
    form: {
      salon: 'golden',
      precio: '7000 Bs',
      descripcion: 'Salón de eventos de lujo. Capacidad para 200 personas. Cuenta con escenario para música en vivo, cocina equipada, bar con barra.',
    }
  }

precioSalon = async (e,f) => {
  cookies.set('precio', e , { path: "/" });
  cookies.set('salon',f, { path: "/" })
  const gold = "Salón de eventos de lujo. Capacidad para 200 personas. Cuenta con escenario para música en vivo, cocina equipada, bar con barra.";
  const plati = "Salón de eventos de lujo. Capacidad para 150 personas. Cuenta con escenario para música en vivo, bar con barra.";
  let aux = gold;
  if (f =="platinum"){
    aux=plati;
  }
  await this.setState({
    form: {
      salon: f,
      precio: e,
      descripcion: aux,
    }
  })
  console.log("de state"+this.state.form.salon)
}
  render() {
    return (
      <div>
      <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active " data-bs-pause="true"  onClick={ (()=> this.precioSalon(7000,"golden")) }>
                <img src="../img/salongolden.jpg" className="d-block w-100 " alt="slide1" />
            </div>

            <div className="carousel-item " data-bs-pause="true" onClick={ (()=> this.precioSalon(5000,"platinum")) }>
                <img src="../img/salonplatinum.jpg" className="d-block w-100  " alt="slide2"/>
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
      
      <Date_finder>salones</Date_finder> 
      <div className='containerPrincipal'>
        <h1>{"Salón "+this.state.form.salon}</h1>
        <h1>{"Precio "+this.state.form.precio+ " Bs."}</h1>
        <h2>{this.state.form.descripcion}</h2>
        <Request>salones</Request>
      </div>

      </div>
    )
  }
}
