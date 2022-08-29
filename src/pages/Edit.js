import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Edit extends Component {
    
    state={
        salon: '',
        fecha: '',
        plato: '',
        invitados: '',
        grupo: '',
        bartenderpro:'',
        garzones:''
    }
    async componentDidMount(){
        const res = await axios({
            method: 'put',
            url: `http://localhost:8080/servicios/${cookies.get('servicio')}/${window.location.pathname.substring(6)}`,
            headers: {'x-token': cookies.get('token')}
        })
        this.setState({
            evento: res.data.evento,
            salon: res.data.salon,
            fecha: res.data.fecha,
            plato: res.data.plato,
            invitados: res.data.invitados,
            grupo: res.data.grupo,
            bartenderpro: res.data.bartenderpro,
            garzones: res.data.garzones
        })
        console.log("Este es id:"+ window.location.pathname.substring(6));
        console.log(`http://localhost:8080/servicios/${cookies.get('servicio')}/`+window.location.pathname.substring(6));
        console.log("x-token:"+ cookies.get('token'))
        console.log(res.data);
    }
    onSubmit = async e=>{
        e.preventDefault()
        const res = await axios({
            method: 'put',
            url: `http://localhost:8080/servicios/${cookies.get('servicio')}/${window.location.pathname.substring(6)}`,
            headers: {'x-token': cookies.get('token')},
            data: {
                salon: this.state.salon,
                fecha: this.state.fecha,
                invitados: this.state.invitados,
                plato: this.state.plato,
                grupo: this.state.grupo,
                bartenderpro: this.state.bartenderpro,
                garzones: this.state.garzones
            }
        })
        if(res.data.msg){
            alert(res.data.msg)
        }else{
            alert("Su actualización fue realizada con éxito");
        }
        console.log(res.data.msg);
        console.log(res)
    }
    
    onInputChange = e => {
        console.log(e.target.value)
        this.setState({
            salon: e.target.value
        })
        
    }

    onChangeDate = e => {
        console.log(e.target.value)
        this.setState({
            fecha: e.target.value
        })
    }
    handleChange = async e => {
        await this.setState({
           
            ...this.state,
            [e.target.name]: e.target.value
          
        });
        console.log(this.state);
      }
  render() {
    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <h4>{this.state.evento}</h4>
                <div className='form-group'>
                    Salon: 
                    <select className='form-control' value={this.state.salon} name='salon' onChange={this.onInputChange}>
                        <option value="golden">Golden</option>
                        <option value="platinum">Platinum</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
                {cookies.get('servicio')=="comida" &&
                    <div>
                    <label>Plato:</label> <br />
                    <input type="text" className='form-control' name="plato" value={this.state.plato} onChange={this.handleChange}/> <br />
                    <label>Invitados:</label> <br />
                    <input type="number" className='form-control' name="invitados" value={this.state.invitados} onChange={this.handleChange}/> <br />
                    </div> 
                }
                {cookies.get('servicio')=="musica" &&
                    <div>
                    <label>Artista:</label> <br />
                    <input type="text" className='form-control' name="grupo" value={this.state.grupo} onChange={this.handleChange}/> <br />
                    </div> 
                }
                {cookies.get('servicio')=="bartender" &&
                    <div>
                    <label>Bartenders:</label> <br />
                    <input type="number" className='form-control' name="bartenderpro" value={this.state.bartenderpro} onChange={this.handleChange}/> <br />
                    <label>Garzones:</label> <br />
                    <input type="number" className='form-control' name="garzones" value={this.state.garzones} onChange={this.handleChange}/> <br />
                    </div> 
                }
                <div className='form-group'>
                    <input
                        type="date"
                        className='form-control'
                        value={this.state.fecha}
                        onChange={this.onChangeDate}
                    />
                </div>
                <form onSubmit={this.onSubmit}>
                    <button type='submit' className='btn btn-primary'>
                        Actualizar
                    </button>

                </form>
            </div>
        </div>
    )
  }
}
