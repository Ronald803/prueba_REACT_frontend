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
          //console.log(response.data);  
          return response.data;
        })
        .then(response=>{
            var respuesta=response.usuario;
            var token=response.token;
            var rol=response.rol;
            cookies.set('id', respuesta.uid, {path: "/"});
            cookies.set('nombreusuario', respuesta.nombreusuario, {path: "/"});
            cookies.set('token',token);
            cookies.set('rol',respuesta.rol);
            //alert(`Bienvenido ${respuesta.nombreusuario}, tu datos fueron registrados correctamente`);
            //window.location.href="./";
            LoginCorrectly(`${respuesta.nombreusuario}, tu datos fueron registrados correctamente`)
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