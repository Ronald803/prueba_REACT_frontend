import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
const cookies = new Cookies();

function ReservasPage() {
    const [service, setService] = useState("salones")
    let filters = {salon:"",grupo:"",plato:""}
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
              if(service === "salones"){
                setReservas(appointments.data[0])
              } else {
                setReservas(appointments.data);
              } 
                console.log(reservas);
            })
            .catch( e => {
                console.log({e});
            })
    }, [service])
    function chooseService(serv){
      console.log(serv);
      setService(serv);
    }
    function choosenFilters(e){
      console.log(e.name);  
      console.log(e.value);
      filters = {
        ...filters,
        [e.name]: e.value
      }
    }
    
    function searchReservas(){
      console.log("AAAAAAAAAAAAAAAAAAA");
      let reservasSinFiltrar = [];
      let reservasFiltradas = [];
      getAllAppointmentsToBackend()
            .then( appointments => {
              console.log("BBBBBBBBBBBB");
              if(service === "salones"){
                reservasSinFiltrar = appointments.data[0]
              } else {
                reservasSinFiltrar = appointments.data;
              } 
              console.log(reservasSinFiltrar);
              if(filters.salon !== "" ){
                reservasSinFiltrar.map(reserva=>{
                  if(reserva.salon===filters.salon){reservasFiltradas.push(reserva)}
                })
              } else { reservasFiltradas = reservasSinFiltrar }
              if(service === "comida" && filters.plato !== ""){
                console.log("CCCCCCCCCCCCCCCCCCCCC");
                reservasSinFiltrar = reservasFiltradas;
                reservasFiltradas = [];
                console.log(reservasSinFiltrar);
                reservasSinFiltrar.map(reserva=>{
                  if(filters.plato === reserva.plato){reservasFiltradas.push(reserva)}
                })
              }
              if(service === "musica" && filters.grupo !== ""){
                reservasSinFiltrar = reservasFiltradas;
                reservasFiltradas = [];
                reservasSinFiltrar.map(reserva=>{
                  if(filters.grupo === reserva.grupo){reservasFiltradas.push(reserva)}
                })
              }
              console.log(reservasFiltradas);
              setReservas(reservasFiltradas)  
            })
            .catch( e => {
                console.log({e});
            })
      
    }
return (
<div className=' bg-opacity-25 contenedor pt-3'>
    <div className='bg-dark card p-3 mx-auto' style={{"maxWidth":"800px"}}>
      <div className='row'>
        <div className='col '>
          <select className="form-select form-select-lg mb-1" aria-label=".form-select-lg example" onChange={(e)=>chooseService(e.target.value)}>
            <option selected>Elige el servicio</option>
            <option value="salones">Salones</option>
            <option value="comida">Comida</option>
            <option value="musica">Música</option>
            <option value="bartender">Bartender</option>
          </select>
        </div>
        <div className='col '>
          <select className='form-select form-select-lg mb-1' name="salon" onChange={(e)=>choosenFilters(e.target)}>
            <option value="">Ambos salones</option>
            <option value="golden">Golden</option>
            <option value="platinum">Platinum</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        {
          service === "musica"
          &&
          <div className='col '>
            <select className='form-select form-select-lg mb-1' name="grupo" onChange={(e)=>choosenFilters(e.target)}>
              <option value="">Grupo musical</option>
              <option value="Kalamarka">Kalamarka</option>
              <option value="Jambao">Jambao</option>
              <option value="Sabor Sabor">Sabor Sabor</option>
            </select>
          </div>
        } 
        {
          service === "comida"
          &&
          <div className='col '>
            <select className='form-select form-select-lg mb-1' name="plato" onChange={(e)=>choosenFilters(e.target)}>
              <option value="">Plato de Comida</option>
              <option value="Pique Macho">Pique Macho</option>
              <option value="Lechon">Lechon</option>
            </select>
          </div>
        }
      </div>
      <div className='mt-2  text-center'><button className='btn btn-success mx-auto' onClick={()=>searchReservas()}>Buscar Reservas</button></div>
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