import React, { Component } from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Bartender extends Component {
  state = {
    precio: '',
    bartenderpro: '',
    garzones: '',
  }
  
cantidadBartenders= e => {
  this.setState({
    [e.target.name]: e.target.value,
  })
 cookies.set([e.target.name],e.target.value, { path: "/"})
 console.log(e.target.value)
 console.log("bartenders: "+ this.state.bartenders + "Garzones: "+this.state.garzones)
 cookies.set('precio', cookies.get('bartenderpro')*200 + cookies.get('garzones')*50, { path: "/"})
}
  render() {
    return (
      <div>
        <div id="carouselExampleControls" className="carousel slide w-50" data-bs-ride="carousel">
          <div className="carousel-inner w-100">
            <div className="carousel-item active " data-bs-pause="true"  >
                <img src="../img/barman1.jpg" className="d-block w-100 " alt="slide1" />
            </div>

            <div className="carousel-item " data-bs-pause="true" >
                <img src="../img/barman2.jpg" className="d-block w-100  " alt="slide2"/>
            </div>

            <div className="carousel-item " data-bs-pause="true" >
                <img src="../img/barman3.jpg" className="d-block w-100  " alt="slide2"/>
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
      <Date_finder>bartender</Date_finder>  
      <Request>bartender</Request>
      <div>
              <label>Bartenders:</label> <br />
              <input type="number" className='form-control' name="bartenderpro" onChange={this.cantidadBartenders}/> <br />
              <label>Garzones:</label> <br />
              <input type="number" className='form-control' name="garzones" onChange={this.cantidadBartenders}/> <br />
              <h1>Precio: {cookies.get('precio')} Bs.</h1>
          </div> 
      </div>
    )
  }
}


