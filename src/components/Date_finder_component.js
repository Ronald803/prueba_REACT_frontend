import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {Link} from "react-router-dom";
import { dateLimits } from '../middleware/minMaxDate';
const cookies = new Cookies();

const limits = dateLimits()

function Date_finder_component(props) {
    const [state, setState] = useState({users: [],date: '',respuesta: false})
    const onChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value
        })
    }
    const onSubmit = async e => {
        e.preventDefault();
        const res = await axios.get(`https://backend-sistema-reservas.vercel.app/servicios/${props.children}?fecha=${this.state.date}`);
        this.setState({ users: res.data });
        if(state.date !="" && res.request.status == 200){
            setState({ 
                ...state,
                respuesta: true 
            })
        }
        cookies.set('fecha', state.date, { path: "/" });
        cookies.set('servicio', props.children, { path: "/"});
    }

return (
<div>Date_finder_component</div>
  )
}

export default Date_finder_component

// export default class Date_finder extends Component {
//   state = {
//     users: [],
//     date: '',
//     respuesta: false
//   }
//   async componentDidMount() {
    
//   }

//   onChangeDate = (e) => {
//     console.log("Reservation Date",e.target.value);
//     console.log({limits});
//     this.setState({
//       date: e.target.value
//     })
//   }

//   onSubmit = async e => {
//     e.preventDefault();
//     const res = await axios.get(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}?fecha=${this.state.date}`);
//     this.setState({ users: res.data });
//     if(this.state.date !="" && res.request.status == 200){
//       this.state.respuesta = true;
//     }
//     cookies.set('fecha', this.state.date, { path: "/" });
//     cookies.set('servicio', this.props.children, { path: "/"});
//   }

//   deleteNote = async(id) => {
//     await axios.delete(`https://backend-sistema-reservas.vercel.app/servicios/${this.props.children}/`+id,{ headers: { "x-token": cookies.get('token') } })
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       alert(`Lo sentimos. ${error.response.data.msg}`);
//     });
//     alert(`Reserva eliminada`);
//     window.location.href=window.location.href;
//   }

//   render() {
//     const respuesta = this.state.users;
//     const disponible = {
//       golden: "",
//       platinum: "",
//       "Sabor Sabor": "",
//       Jambao: "",
//       Kalamarka: ""
//     };
//     let disponibilidad = `${this.state.date} todo DISPONIBLE.`;
//     respuesta.map( (element)=>{
//       if(element.caracteristica!=="eliminado"){
//         if(element.servicio==="salones"){
//           disponible[element.salon] = "NO DISPONIBLE";
//           disponibilidad = undefined
//         } else if(element.servicio==="musica"){
//           disponible[element.grupo] = "NO DISPONIBLE";
//           disponibilidad = undefined
//         } 
//       } 
//     })
//     return (
//       <div>
//         <div class="input-group my-2 px-2">
//           <span class="input-group-text" style={{"minWidth":"90px"}} >Fecha</span>
//           <input 
//             type="date" 
//             className="form-control text-center" 
//             onChange={this.onChangeDate}
//             min={limits.min}
//             max={limits.max}
//           />
//         </div>
//         <div className='text-center'>
//           <button onClick={this.onSubmit} className='btn btn-success'>Consultar Disponibilidad</button>
//         </div>
        
//         <div class="contenedor-derecho contenedor-fecha-disponibilidad">
//             { this.state.respuesta &&
//                 <div className='text-center mt-2'>
//                 {this.state.respuesta === true && <div className=' bg-primary text-white'><p>{disponibilidad}</p></div>}
//                 {disponible.golden !== "" && 
//                   <div className='bg-danger text-white row mx-2'>
//                     <p className='pt-2 col-md-10'>Salón Golden {disponible.golden}</p>
//                     <button className='col-md-2 btn btn-success'>Info</button>
//                   </div>
//                 }
//                 {disponible.platinum !== "" && 
//                   <div className='bg-danger text-white row mx-2'>
//                     <p className='pt-2 col-md-10'>Salón Platinum {disponible.platinum}</p>
//                     <button className='col-md-2 btn btn-success'>Info</button>
//                   </div>
//                 }
//                 {disponible["Sabor Sabor"] !== "" && 
//                   <div className='bg-danger text-white row mx-2'>
//                     <p className='pt-2 col-md-10'>Grupo Sabor Sabor {disponible["Sabor Sabor"]}</p>
//                     <button className='col-md-2 btn btn-success'>Info</button>
//                   </div>
//                 }
//                 {disponible.Kalamarka !== "" && 
//                   <div className='bg-danger text-white row mx-2'>
//                     <p className='pt-2 col-md-10'>Grupo Kalamarka: {disponible.Kalamarka}</p>
//                     <button className='col-md-2 btn btn-success'>Info</button>
//                   </div>
//                 }
//                 {disponible.Jambao !== "" && 
//                   <div className='bg-danger text-white row'>
//                     <p className='pt-2 col-md-10'>Grupo Jambao: {disponible.Jambao}</p>
//                     <button className='col-md-2 btn btn-success'>Info</button>
//                   </div>
//                 }
//                 </div>
//             }
//         </div>
        
//         <div>
//           {this.state.users.map(user =>(
//             <div key={user._id}>  
//               { cookies.get('rol')=="ADMINISTRADOR" ? 
//                                 <div class="resultado-tarjeta">
//                                   <div>
//                                     <h5>{user.evento}</h5>
//                                   </div>
//                                   <div>
//                                     <p>Salón: {user.salon}</p>
//                                     <p>Fecha: {user.fecha}</p>
//                                     <p>Servicio: {user.servicio}</p>
//                                     {this.props.children=="bartender" &&
//                                       <div>
//                                         <p>Bartenders: {user.bartenderpro}</p>
//                                         <p>Garzones: {user.garzones}</p>
//                                       </div>
//                                       }
//                                     {this.props.children=="musica" &&
//                                       <div>
//                                         <p>Artista: {user.grupo}</p>
//                                       </div>
//                                     }
//                                     {this.props.children=="comida" &&
//                                       <div>
//                                         <p>Plato: {user.plato}</p>
//                                         <p>Invitados: {user.invitados}</p>
//                                       </div>
//                                     }
//                                     <p>Precio: {user.precio}</p>
//                                     <p>nombreusuario: {user.nombreusuario}</p>
//                                     { user.caracteristica=='eliminado' ? 
//                                         <p>ELIMINADO</p>:
//                                         <div class="resultado-botones">
//                                           <Link class="link flotar" to={"/edit/" + user._id}>Actualizar Reserva</Link>
//                                           <a class="boton-eliminar flotar" onClick={(() => this.deleteNote(user._id))}>Eliminar Reserva</a>
//                                         </div>
//                                     }
//                                   </div>
//                                 </div> :
//                               <div>{user.caracteristica!=='eliminado' &&
                                    
//                                 <div key={user._id}>
//                                   <p>Este es un evento que tenemos agendado para la fecha {this.state.date}:</p>
//                                   <div class="resultado-tarjeta">
//                                     <div >
//                                       <h5>Evento: {user.evento}</h5>
//                                     </div>
//                                     <div >
//                                       <p>Salón: {user.salon}</p>
//                                       {this.props.children=="musica" && <p>Artista: {user.grupo}</p>}
//                                       <p>Servicio: {user.servicio}</p>
//                                     </div>
//                                   </div>
//                                 </div>
//                                           }
//                               </div>
//                             }
//               </div>  
//               )
//             )
//           }
//         </div>
//       </div>
//     )
//   }

// }
