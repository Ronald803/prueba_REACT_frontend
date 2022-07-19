import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export class Home extends Component {
  render() {
    console.log(cookies.get('nombreusuario'));
    console.log(cookies.get('rol'));
    console.log(cookies.get('token'));
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <Link className="carousel-item active" data-bs-interval="2000" to="/servicios/salones">
                <img src="./img/imgSalon.jpeg" className="d-block w-100" alt="slide1" />
            </Link>

            <Link className="carousel-item" data-bs-interval="2000" to="/servicios/bartender">
                <img src="./img/bartender.jpg" className="d-block w-100" alt="slide2"/>
            </Link>

            <Link className="carousel-item" data-bs-interval="2000" to="/servicios/comida">
                <img src="./img/comida.jpg" className="d-block w-100" alt="slide3"/>
            </Link>

            <Link className="carousel-item" data-bs-interval="2000" to="/servicios/musica">
                <img src="./img/musica.webp" className="d-block w-100" alt="slide4"/>
            </Link>
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
        
        <section className="w-50 mx-auto text-center pt-5" id="intro">
          <h1 className="p-3 fs-2 border-top border-3">Contamos con todo lo que necesites para ese<span className="text-primary"> día especial</span></h1>
          <p className="p-3 fs-4"><span className="text-primary">Eventos Gran Poder</span> te ayuda a organizar un evento inolvidable. Salones, música, decoración, catering, bartenders, y más...</p>
        </section>

        <section className="container-fluid">
            <div className="row w-75 mx-auto my-5 servicio-fila">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex  my-5 icono-wrap">
                  <img src="./img/calidad.webp" alt="calidad" width="180" heigth="160"/>
                  <div>
                    <h3 className="fs-5 mt-4 px-4 pb-1">Servicio 5 estrellas</h3>
                    <p className="px-4">Salones con alto estandar de comodidad y calidad</p>
                  </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
                  <img src="./img/calidad.webp" alt="calidad" width="180" heigth="160"/>
                  <div>
                    <h3 className="fs-5 mt-4 px-4 pb-1">Servicio 5 estrellas</h3>
                    <p className="px-4">Salones con alto estandar de comodidad y calidad</p>
                  </div>
              </div>
                 
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
                  <img src="./img/calidad.webp" alt="calidad" width="180" heigth="160"/>
                  <div>
                    <h3 className="fs-5 mt-4 px-4 pb-1">Servicio 5 estrellas</h3>
                    <p className="px-4">Salones con alto estandar de comodidad y calidad</p>
                  </div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 d-flex my-5 icono-wrap">
                  <img src="./img/calidad.webp" alt="calidad" width="180" heigth="160"/>
                  <div>
                    <h3 className="fs-5 mt-4 px-4 pb-1">Servicio 5 estrellas</h3>
                    <p className="px-4">Salones con alto estandar de comodidad y calidad</p>
                  </div>
              </div>   
            </div>
        </section>

        <section>
          <div  className='w-75 m-auto text-center' id="equipo">
              <h1 className='mb-5 fs-2'>Tenemos todo para el evento de tus <span className='text-primary'>sueños</span></h1>
              <p className='fs-4'>El lugar, la música, la atención para tus invitados, decoración, la comida, y más detalles que puedes elegir de nuestro catálogo donde te ofrecemos opciones para ese día especial. </p>
          </div>
          <div className='mt-5 text-center'>
            <img className='img-fluid' src="./img/contactos.jpg" alt="contactos"/>
          </div>
        </section>

      </div>

    )
  }
}
