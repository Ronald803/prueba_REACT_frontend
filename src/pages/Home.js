import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
  render() {
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
      </div>

    )
  }
}
