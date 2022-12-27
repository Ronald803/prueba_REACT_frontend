import React, { Component } from 'react'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Footer extends Component {
   render() {
    return (
        <footer>
            <div>C. Ricardo Bustamante #867 Z. Gran Poder</div>
            <div>Telefono +591 2 491926</div>
            <div>Celular +591 74582356</div>
            <div>eventos_gran_poder@gmail.com</div>
        </footer>
    )
  }
}