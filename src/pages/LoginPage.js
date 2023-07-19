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
    const iniciarSesion= async()=>{
        await axios.post(baseUrl, {correo: form.username, contraseña: form.password})
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
            AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
        })
      }
    return (
        <div class="contenedor-secundario">
        <div class="contenedor-derecho">
          <label>Correo Electrónico:</label>
          <br/>
            <input 
              type="text"
              name="username"
              onChange={(e)=>handleChange(e)}
            />
          <br/>
          <br/>
          <label>Contraseña: </label>
          <br/>
              <input
              type="password"
              name='password'
              onChange={(e)=>handleChange(e)}
            />
          <br/>
          <button class="resultado-botones" onClick={()=> iniciarSesion()} >Iniciar Sesión</button>
          <button class="resultado-botones" onClick={()=> CrearUsuario()} >Crear Usuario</button>
        </div>  
      </div>
    )
}

export default LoginPage