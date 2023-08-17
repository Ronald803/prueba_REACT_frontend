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
        garzones:'',
        correo:'',
        celular:'',
        rol:'',
        usuario:''
    }
    async componentDidMount(){
        const res = await axios({
            method: 'put',
            url: `https://backend-sistema-reservas.vercel.app/servicios/${cookies.get('servicio')}/${window.location.pathname.substring(6)}`,
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
            garzones: res.data.garzones,
            correo: res.data.correo,
            celular: res.data.celular,
            rol: res.data.rol,
            usuario: res.data.nombreusuario
        })
    }
    onSubmit = async e=>{
        e.preventDefault()
        const res = await axios({
            method: 'put',
            url: `https://backend-sistema-reservas.vercel.app/servicios/${cookies.get('servicio')}/${window.location.pathname.substring(6)}`,
            headers: {'x-token': cookies.get('token')},
            data: {
                salon: this.state.salon,
                fecha: this.state.fecha,
                invitados: this.state.invitados,
                plato: this.state.plato,
                grupo: this.state.grupo,
                bartenderpro: this.state.bartenderpro,
                garzones: this.state.garzones,
                celular: this.state.celular,
                correo: this.state.correo,
                rol: this.state.rol
            }
        })
        if(res.data.msg){
            alert(res.data.msg)
        }else{
            alert("Su actualización fue realizada con éxito");
        }
    }    
    onInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    onChangeDate = e => {
        this.setState({
            fecha: e.target.value
        })
    }
    handleChange = async e => {
        await this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
      }
  render() {
    return (
<div className='mx-auto bg-danger bg-opacity-25 contenedor py-3' >
    <div className="card border border-dark bg-dark bg-opacity-75 mx-auto" style={{"maxWidth":"400px"}}>
        <div className='card-body'>
            {cookies.get('servicio')=="usuarios" 
                ?
                <div>
                    <h4 className='card-title text-center text-white py-4'>{this.state.usuario}</h4>
                    <div class="input-group mb-3">
                        <span className="input-group-text" style={{"minWidth":"110px"}} >Rol</span>
                        <select className='form-control text-center' value={this.state.rol} name='rol' onChange={this.onInputChange}>
                            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                            <option value="MODERADOR">MODERADOR</option>
                            <option value="USUARIO">USUARIO</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"110px"}}>Correo</span>
                        <input type="text" name="correo" value={this.state.correo} onChange={this.handleChange} className="form-control text-center" />
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"110px"}}>Celular</span>
                        <input type="text" name="celular" value={this.state.celular} onChange={this.handleChange} className="form-control text-center" />
                    </div>
                </div> 
                :
                <div>
                    <h4 className='card-title text-center'>{this.state.evento}</h4>
                    <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"110px"}} >Salón</span>
                        <select className='form-control text-center' value={this.state.salon} name='salon' onChange={this.onInputChange}>
                            <option value="golden">Golden</option>
                            <option value="platinum">Platinum</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>    
                    {cookies.get('servicio')=="comida" &&
                        <div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" style={{"minWidth":"110px"}}>Plato</span>
                                <input type="text" name="plato" value={this.state.plato} onChange={this.handleChange} className="form-control text-center" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" style={{"minWidth":"110px"}}>Invitados</span>
                                <input type="number" name="invitados" value={this.state.invitados} onChange={this.handleChange} className="form-control text-center" />
                            </div>
                        </div> 
                    }
                    {cookies.get('servicio')=="musica" &&
                        <div class="input-group mb-3">
                            <span class="input-group-text" style={{"minWidth":"110px"}}>Artista</span>
                            <input type="text" name="grupo" value={this.state.grupo} onChange={this.handleChange} className="form-control text-center" />
                        </div>
                    }
                    {cookies.get('servicio')=="bartender" &&
                        <div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" style={{"minWidth":"110px"}}>Bartenders</span>
                                <input type="number" name="bartenderpro" value={this.state.bartenderpro} onChange={this.handleChange} className="form-control text-center" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" style={{"minWidth":"110px"}}>Garzones</span>
                                <input type="number" name="garzones" value={this.state.garzones} onChange={this.handleChange} className="form-control text-center" />
                            </div>
                        </div> 
                    }
                    <div class="input-group mb-3">
                        <span class="input-group-text" style={{"minWidth":"110px"}}>Fecha</span>
                        <input type="date" value={this.state.fecha} onChange={this.onChangeDate} className="form-control" />
                    </div>
                </div>
            }
            
            <form onSubmit={this.onSubmit} className='text-center mt-4'>
                <button className='btn btn-primary' type='submit'>Actualizar</button>
            </form>
        </div>
    </div>
</div>
    )
  }
}


{/* <div className='mx-auto'>
    <div className="card mx-auto my-3" style={{"maxWidth":"300px"}}>
        <div className='card-body'>
            <h4 className='card-title text-center'>{this.state.evento}</h4>
            <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"110px"}} >Salón</span>
                <select className='form-control' value={this.state.salon} name='salon' onChange={this.onInputChange}>
                    <option value="golden">Golden</option>
                    <option value="platinum">Platinum</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            
            <div>
                Salon: 
                <select value={this.state.salon} name='salon' onChange={this.onInputChange}>
                    <option value="golden">Golden</option>
                    <option value="platinum">Platinum</option>
                    <option value="otro">Otro</option>
                </select>
            </div>
            {cookies.get('servicio')=="usuarios" &&
                <div>
                    <div>
                    Rol: 
                        <select value={this.state.rol} name='rol' onChange={this.onInputChange}>
                            <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                            <option value="MODERADOR">MODERADOR</option>
                            <option value="USUARIO">USUARIO</option>
                        </select>
                    </div>
                    <label>Correo:</label> <br />
                    <input type="text" name="correo" value={this.state.correo} onChange={this.handleChange}/> <br />
                    <label>Celular:</label> <br />
                    <input type="number" name="celular" value={this.state.celular} onChange={this.handleChange}/> <br />
                </div> 
            }
            {cookies.get('servicio')=="comida" &&
                <div>
                <label>Plato:</label> <br />
                <input type="text" name="plato" value={this.state.plato} onChange={this.handleChange}/> <br />
                <label>Invitados:</label> <br />
                <input type="number" name="invitados" value={this.state.invitados} onChange={this.handleChange}/> <br />
                </div> 
            }
            {cookies.get('servicio')=="musica" &&
                <div>
                <label>Artista:</label> <br />
                <input type="text" name="grupo" value={this.state.grupo} onChange={this.handleChange}/> <br />
                </div> 
            }
            {cookies.get('servicio')=="bartender" &&
                <div>
                <label>Bartenders:</label> <br />
                <input type="number" name="bartenderpro" value={this.state.bartenderpro} onChange={this.handleChange}/> <br />
                <label>Garzones:</label> <br />
                <input type="number" name="garzones" value={this.state.garzones} onChange={this.handleChange}/> <br />
                </div> 
            }
            <div>
                <input type="date" value={this.state.fecha} onChange={this.onChangeDate}/>
            </div>
            <form onSubmit={this.onSubmit} className='text-center mt-4'>
                <button className='btn btn-primary' type='submit'>Actualizar</button>
            </form>
        </div>
    </div>
</div> */}