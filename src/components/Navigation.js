import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className='navbar-brand' to="/">
              Eventos Gran Poder
          </Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/servicios/salones">Salones</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/servicios/comida">Comida</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/servicios/musica">Música</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/servicios/musica">Bartender</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/usuarios">Iniciar Sesión</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
