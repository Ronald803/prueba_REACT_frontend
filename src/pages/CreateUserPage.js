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
    <div className=' py-4'>
    <div className='card border border-dark bg-dark bg-opacity-75' style={{"maxWidth":"400px","margin":"auto"}}>
      <div className='card-body'>
        <div className='my-3'>
          <div className="mb-3">
            <div className='text-center text-white'>
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre de Usuario</label>
            </div>
            <input 
              type="text" 
              className="form-control border-black" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              name="username" 
              onChange={(e)=>{handleChange(e)}}
            />
          </div>
          <div className="mb-3">
            <div className='text-center text-white'>
              <label htmlFor="exampleInputPassword1" className="form-label">Correo Electrónico</label>
            </div>
            <input 
              type="email" 
              className="form-control border-black" 
              id="exampleInputPassword1" 
              name='email'  
              onChange={(e)=>handleChange(e)}
            />
          </div>
          <div className="mb-3">
            <div className='text-center text-white'>
              <label htmlFor="exampleInputPassword1" className="form-label">Celular</label>
            </div>
            <input 
              type="text" 
              className="form-control border-black" 
              id="exampleInputPassword1" 
              name='cellphone'  
              onChange={(e)=>handleChange(e)}
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
            <button onClick={()=> registrarse()} className="btn btn-danger">Registrarse</button>
          </div>
        </div>      
      </div>
    </div>
    </div>   
  )
}

export default CreateUserPage

{/* <div class="contenedor-secundario">
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
    </div> */}