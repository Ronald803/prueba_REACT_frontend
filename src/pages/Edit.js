import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export class Edit extends Component {
    
    state={
        users:[],
        userSelected: '',
        salon: '',
        fecha: '',
    }
    async componentDidMount(){
        //const res = await axios.get('http://localhost:8080/servicios/salones?fecha=2022-08-15')
        //const res = await axios.put(`http://localhost:8080/servicios/salones/`+window.location.pathname.substring(6),{ headers: { "x-token": cookies.get('token') } });
        //const res = await axios.put(`http://localhost:8080/servicios/salones/`+window.location.pathname.substring(6),cookies.get('token'));
        //this.setState({users: res.data.map(user=> user._id)})
        const res = await axios({
            method: 'put',
            url: `http://localhost:8080/servicios/salones/${window.location.pathname.substring(6)}`,
            headers: {'x-token': cookies.get('token')}
        })
        this.setState({
            evento: res.data.evento,
            salon: res.data.salon,
            fecha: res.data.fecha
        })
        console.log(this.state.users)
        console.log("Este es id:"+ window.location.pathname.substring(6));
        console.log(`http://localhost:8080/servicios/salones/`+window.location.pathname.substring(6));
        console.log("x-token:"+ cookies.get('token'))
        console.log(res.data);
    }
    onSubmit = async e=>{
        e.preventDefault()
        const res = await axios({
            method: 'put',
            url: `http://localhost:8080/servicios/salones/${window.location.pathname.substring(6)}`,
            headers: {'x-token': cookies.get('token')},
            data: {
                salon: this.state.salon,
                fecha: this.state.fecha
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
  render() {
    return (
        <div className='col-md-6 offset-md-3'>
            <div className='card card-body'>
                <h4>{this.state.evento}</h4>
                {/* SELECT USER*/}
                <div className='form-group'>
                    Salon: 
                    <select className='form-control' value={this.state.salon} name='salon' onChange={this.onInputChange}>
                        <option value="golden">Golden</option>
                        <option value="platinum">Platinum</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>
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
