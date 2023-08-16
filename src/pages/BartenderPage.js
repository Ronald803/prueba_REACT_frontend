import React,{useState} from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function BartenderPage() {
const [form, setForm] = useState({bartenderpro:0,garzones:0});
const cantidadBartenders = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })
    cookies.set([e.target.name], e.target.value, { path: "/" })
    cookies.set('precio', cookies.get('bartenderpro') * 200 + cookies.get('garzones') * 50, { path: "/" })
  }
return (
<div className='row'>
  <div className='col-sm-4 ps-4 pt-2'>
    <div className='card '>
      <div>
        <div className='card-header bg-black text-white text-center'>Detalles de Reserva</div>
        <Date_finder>bartender</Date_finder>
        <div className='px-2 pt-3'>
          <div class="input-group mb-3">
            <span class="input-group-text" style={{"minWidth":"90px"}} >Bartender(s)</span>
            <input type="number" className="form-control text-center" name="bartenderpro" onChange={(e)=>cantidadBartenders(e)}/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style={{"minWidth":"90px"}}>Garzon(es)</span>
            <input type="number" className="form-control text-center" name='garzones' onChange={(e)=>cantidadBartenders(e)}/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style={{"minWidth":"90px"}}>Precio</span>
            <input type="text" className="form-control text-center" placeholder={"Bs. "+ cookies.get('precio')} disabled/>
          </div>
        </div>
      </div>
      <Request>bartender</Request>
    </div>
  </div>
  <div className='col-sm-8 border-start border-danger border-3 ps-4 py-2'>
    <div className="card mb-3 rounded-4">
      <div className="row g-0">
        <div className="col-md-6">
          <img className='img-fluid rounded-4' src="../img/barman1.jpg" alt="Fotografia barman trabajando" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white text-center py-2 rounded">Barman</h5>
            <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 200</h6>
            <ul className='card-text lh-sm border border-dark rounded py-2'>
              <li className='fs-6'><small>Atiende pedidos de los invitados en el servicio de barra</small></li>
              <li className='fs-6'><small>Show Barman de preparación y elaboración de todo tipo de cocteles</small></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 rounded-4">
      <div className="row g-0">
        <div className="col-md-6">
          <img className='img-fluid rounded-4' src="../img/barman2.jpg" alt="Fotografia bartenders" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white text-center py-2 rounded">Bartender</h5>
            <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 50</h6>
            <ul className='card-text lh-sm border border-dark rounded py-2'>
              <li className='fs-6'><small>Pieza clave para la atención de los invitados</small></li>
              <li className='fs-6'><small>Elegantes, atentos y eficientes, velan que tus invitados tengan una experiencia inolvidable</small></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default BartenderPage
{/* <div>
        <body class="servicio">
            <section class="tarjetas-contenedor">
                <div class="tarjeta-contenedor flotar">
                  <div class="tarjeta-img">
                    <img src="../img/barman1.jpg" alt="Fotografia de Barman trabajando" />
                  </div>
                  <div class="tarjeta-descripcion">
                    <h2 class="tarjeta-titulo">Barman</h2>
                    <div class="tarjeta-descripcion-precio">
                      <h2>Bs. <span class="precio-numero">200</span></h2>
                      <ul class="tarjeta-caracteristicas">
                        <li>Atiende pedidos de los invitados en el servicio de barra</li>
                        <li>Show Barman de preparación y elaboración de todo tipo de cocteles</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tarjeta-contenedor flotar">
                  <div class="tarjeta-img">
                    <img src="../img/barman2.jpg" alt="Fotografia de bartenders" />
                  </div>
                  <div class="tarjeta-descripcion">
                    <h2 class="tarjeta-titulo">Bartenders</h2>
                    <div class="tarjeta-descripcion-precio">
                      <h2>Bs. <span class="precio-numero">50</span></h2>
                      <ul class="tarjeta-caracteristicas">
                        <li>Pieza clave para la atención de los invitados</li>
                        <li>Elegantes, atentos y eficientes, velan que tus invitados tengan una experiencia inolvidable</li>
                      </ul>
                    </div>
                  </div>
                </div>
          </section>
          <div>
            <Date_finder>bartender</Date_finder>
            <div class="contenedor-derecho contenedor-solicitud-reserva">
              <label>
                <span>Bartender(s):</span>
                <input type="number" class='form-control' name="bartenderpro" onChange={(e)=>cantidadBartenders(e)} />
              </label>
              <label>
                <span>Garzones(s):</span>
                <input type="number" class='form-control' name="garzones" onChange={(e)=>cantidadBartenders(e)} />
              </label>
              <p>Precio: Bs. {cookies.get('precio')}</p>
            </div>
            <Request>bartender</Request>
          </div>
        </body>
      </div> */}