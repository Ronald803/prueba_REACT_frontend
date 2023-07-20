import React,{useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie';
import LoginCorrectly from '../components/Alerts/LoginCorrectly';
import AlgoSalioMal from '../components/Alerts/AlgoSalioMal';

const baseUrl="https://backend-sistema-reservas.vercel.app/usuarios";
const cookies = new Cookies();

function CreateUserPage() {
    const [form, setForm] = useState({})
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const registrarse = async()=>{
        console.log({form});
        await axios.post(baseUrl, { nombreusuario:  form.username, 
                                    contraseña:     form.password,
                                    correo:         form.email,
                                    celular:        form.cellphone,
                                    caracteristica: "activo",
                                    rol:            "usuario"
                                  })
        .then(response=>{
          cookies.set('id', response.data.usuario.uid, {path: "/"});                        // ----------------- cookies -----------------                            
          cookies.set('nombreusuario', response.data.usuario.nombreusuario, {path: "/"});   // ----------------- cookies -----------------                     
          cookies.set('token',response.data.token);                                         // ----------------- cookies -----------------                           
          cookies.set('rol',response.data.usuario.rol);                                                     
          sessionStorage.setItem('user',response.data.usuario.nombreusuario); 
          sessionStorage.setItem('rol',response.data.usuario.rol);            
          sessionStorage.setItem('token',response.data.token);                
          LoginCorrectly(`${response.data.usuario.nombreusuario}, tu datos fueron registrados correctamente`)
          setTimeout(() => {
            window.location.href="./";  
          }, 3000);
        })       
        .catch(error=>{
            console.log(error);
            //alert(`Lo sentimos. ${error.response.data.msg}`);
            AlgoSalioMal(`Lo sentimos. ${error.response.data.msg}`)
        })
    }
    return (
    <div class="contenedor-secundario">
        <div class="contenedor-derecho">
            <label>Nombre Usuario:</label>
            <br/>
              <input 
                type="text"
                
                name="username"
                onChange={(e)=>handleChange(e)}
              />
            <br/>
            <label>Correo electrónico:</label>
            <br/>
              <input 
                type="text"
                
                name="email"
                onChange={(e)=>handleChange(e)}
              />
            <br/>
            <label>Celular:</label>
            <br/>
              <input 
                type="text"
                
                name="cellphone"
                onChange={(e)=>handleChange(e)}
              />
            <br/>

            <label>Contraseña: </label>
            <br/>
                <input
                type="password"
                
                name='password'
                onChange={(e)=>handleChange(e)}
              />
            <br/>
            <button class="resultado-botones" onClick={()=> registrarse()} >Registrarse</button>
        </div>
    </div>
  )
}

export default CreateUserPage