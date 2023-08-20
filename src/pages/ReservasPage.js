import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
const cookies = new Cookies();

function ReservasPage() {
    const [service, setService] = useState("salones")
    const [reservas, setReservas] = useState([])
    const userRol = sessionStorage.getItem('rol');
    function getAllAppointmentsToBackend(){
        return axios.get(`https://backend-sistema-reservas.vercel.app/${service}/all`,{headers:{'x-token': cookies.get('token')}})
    }
    function deleteAppointmentFromBackend(id){
        axios.delete(`https://backend-sistema-reservas.vercel.app/servicios/${"salones"}/`+id,{ headers: { "x-token": cookies.get('token') } })
        .then(response => {
            console.log(response.data);
            alert(`Reserva eliminada`);
            window.location.href=window.location.href;    
        })
        .catch(error => {
            alert(`Lo sentimos. ${error.response.data.msg}`);
        });
    }
    useEffect(() => {
        getAllAppointmentsToBackend()
            .then( appointments => {
                //console.log(appointments.data);
                setReservas(appointments.data[0]);
                console.log(reservas);
            })
            .catch( e => {
                console.log({e});
            })
    }, [])
    
return (
<div className='bg-danger bg-opacity-25 contenedor'>
    <div>
        
    </div>
        <div className='row'>    
        {
            reservas?.map(reserva=>(
            <div className='col-lg-3 col-md-4 col-sm-6 px-2 py-2'>
                <div className='card mt-2 bg-opacity-75 bg-black' key={reserva._id}>
                    <div className='card-body' >
                        {
                            userRol=="ADMINISTRADOR" &&
                            <div class="resultado-tarjeta">
                                <h5 className='card-title text-center text-white'>{reserva.evento}</h5>
                                <div class="input-group ">
                                  <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Salón</span>
                                  <input type="text" className="form-control text-center" placeholder={reserva.salon} disabled/>
                                </div>
                                <div class="input-group ">
                                  <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Fecha</span>
                                  <input type="text" className="form-control text-center" placeholder={reserva.fecha} disabled/>
                                </div>
                                <div class="input-group ">
                                  <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Servicio</span>
                                  <input type="text" className="form-control text-center" placeholder={reserva.servicio} disabled/>
                                </div>
                                  {reserva.servicio=="bartender" &&
                                    <div>
                                      <div class="input-group ">
                                        <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Bartenders</span>
                                        <input type="text" className="form-control text-center" placeholder={reserva.bartenderpro} disabled/>
                                      </div>
                                      <div class="input-group ">
                                        <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Garzones</span>
                                        <input type="text" className="form-control text-center" placeholder={reserva.garzones} disabled/>
                                      </div>
                                    </div>
                                  }
                                  {reserva.servicio=="musica" &&
                                    <div class="input-group ">
                                      <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Artista</span>
                                      <input type="text" className="form-control text-center" placeholder={reserva.grupo} disabled/>
                                    </div>
                                  }
                                  {reserva.servicio=="comida" &&
                                    <div>
                                      <div class="input-group ">
                                        <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Plato</span>
                                        <input type="text" className="form-control text-center" placeholder={reserva.plato} disabled/>
                                      </div>
                                      <div class="input-group ">
                                        <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Invitados</span>
                                        <input type="text" className="form-control text-center" placeholder={reserva.invitados} disabled/>
                                      </div>
                                    </div>
                                  }
                                  <div class="input-group ">
                                    <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Precio</span>
                                    <input type="text" className="form-control text-center" placeholder={reserva.precio} disabled/>
                                  </div>
                                  <div class="input-group ">
                                    <span class="input-group-text bg-dark bg-opacity-75 text-white" style={{"minWidth":"110px"}} >Usuario</span>
                                    <input type="text" className="form-control text-center" placeholder={reserva.nombreusuario} disabled/>
                                  </div>
                                  { reserva.caracteristica=='eliminado' ? 
                                      <h5 className='text-warning text-center py-2 mt-4 mt-2'>ELIMINADO</h5>
                                      :
                                      <div class="pt-2 text-center">
                                        <Link style={{"width":"200px"}} class="my-2 col btn btn-primary mx-2" to={"/edit/" + reserva._id}>Actualizar Reserva</Link>
                                        <a style={{"width":"200px"}} class="col btn btn-danger mx-2" onClick={()=>deleteAppointmentFromBackend(reserva._id)}>Eliminar Reserva</a>
                                        {/* <a class="col btn btn-danger mx-2" onClick={(() => this.deleteNote(reserva._id))}>Eliminar Reserva</a> */}
                                      </div>
                                  } 
                            </  div> 
                        }
                    </div>
                </div>
            </div>
            ))
        }
        </div>
</div>
  )
}


export default ReservasPage