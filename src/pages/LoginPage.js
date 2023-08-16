import React, {useState} from 'react'
import axios from 'axios'

import Cookies from 'universal-cookie';
import LoginCorrectly from '../components/Alerts/LoginCorrectly';
import AlgoSalioMal from '../components/Alerts/AlgoSalioMal';

const baseUrl="https://backend-sistema-reservas.vercel.app/auth/login";
const cookies = new Cookies();


function LoginPage() {
    const [form, setForm] = useState({username:"",password:""});
    const handleChange =  (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
      }
    const CrearUsuario=()=>{ window.location.href='/Create_user' }
    const iniciarSesion= async(e)=>{
        await axios.post(baseUrl, {correo: "pepepalotes@test.com", contraseña: "123456"})
        .then(response=>{
            var respuesta=response.data.usuario;
            var token=response.data.token;
            var rol=response.data.rol;
            cookies.set('id', respuesta.uid, {path: "/"});
            cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
            cookies.set('token',token, {path:"/"});
            cookies.set('rol',respuesta.rol, {path:"/"});
            sessionStorage.setItem('user',response.data.usuario.nombreusuario); // ----------------- cookies -----------------                 
            sessionStorage.setItem('rol',response.data.usuario.rol);            // ----------------- cookies -----------------         
            sessionStorage.setItem('token',response.data.token);                // ----------------- cookies -----------------     
            LoginCorrectly(`Que bueno saber de ti ${respuesta.nombreusuario}`)
            setTimeout(() => {
                window.location.href="./";  
            }, 2000);          
        })       
        .catch(error=>{
            //AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
        })
      }
return (
<div className=' py-4'>
<div className='card border border-dark bg-dark bg-opacity-75' style={{"maxWidth":"400px","margin":"auto"}}>
  <div className='card-body'>
    <div className='my-3'>
      <div className="mb-3">
        <div className='text-center text-white'>
          <label htmlFor="exampleInputEmail1" className="form-label">Correo Electrónico</label>
        </div>
        <input 
          type="email" 
          className="form-control border-black" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          name="username" 
          onChange={(e)=>{handleChange(e)}}
        />
      </div>
      <div className="mb-3">
        <div className='text-center text-white'>
          <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
        </div>
        <input 
          type="password" 
          className="form-control border-black" 
          id="exampleInputPassword1" 
          name='password'  
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div className='text-center'>
        <button onClick={()=>iniciarSesion()} className="btn btn-danger">Iniciar Sesión</button>
      </div>
    </div>      
  </div>
</div>
</div> 
  )
}

export default LoginPage


{/* <div className='card bg-primary' style={{"maxWidth":"400px","margin":"auto"}}>
  <div className='card-body'>
    <div className=''>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">Correo Electrónicossssssss</label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          name="username" 
          onChange={(e)=>{handleChange(e)}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
        <input 
          type="password" 
          className="form-control" 
          id="exampleInputPassword1" 
          name='password'  
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <button onClick={()=>iniciarSesion()} className="btn btn-primary">Iniciar Sesión</button>
    </div>      
  </div>
</div>  */}







// <div class="contenedor-secundario">
      //   <div class="contenedor-derecho">
      //     <label>Correo Electrónico:</label>
      //     <br/>
      //       <input 
      //         type="text"
      //         name="username"
      //         onChange={(e)=>handleChange(e)}
      //       />
      //     <br/>
      //     <br/>
      //     <label>Contraseña: </label>
      //     <br/>
      //         <input
      //         type="password"
      //         name='password'
      //         onChange={(e)=>handleChange(e)}
      //       />
      //     <br/>
      //     <button class="resultado-botones" onClick={()=> iniciarSesion()} >Iniciar Sesión</button>
      //     <button class="resultado-botones" onClick={()=> CrearUsuario()} >Crear Usuario</button>
      //   </div>
      // </div>