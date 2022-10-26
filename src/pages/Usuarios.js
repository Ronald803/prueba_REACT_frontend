import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export class Usuarios extends Component {
  render() {
    return (
      <div>
        <h1>Usuarios Edicion</h1>
      </div>
    )
  }
}
