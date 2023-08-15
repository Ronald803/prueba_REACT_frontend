import React,{useState,useEffect} from 'react'
import Date_finder from '../components/Date_finder'
import Instructions from '../components/Alerts/Instructions';
import { Request } from '../components/Request';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function SalonePage() {
    const [form, setForm] = useState({salon:null,precio:0});
    useEffect(() => { Instructions() }, [])
    const precioSalon = (e, f) => {
        cookies.set('precio', e, { path: "/" });
        cookies.set('salon', f, { path: "/" })
        setForm({
            salon: f,
            precio: e         
        })
    }
return (
    <div>
    <div className='row'>
      <div className='col-sm-4 ps-4'>
        <Date_finder>salones</Date_finder>
        <div className='card '>
          <div>
            <div className='card-header bg-black text-white text-center'>Detalles de Reserva</div>
            <div className='px-2 pt-3'>
              <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"85px"}} >Salón</span>
                <input type="text" className="form-control text-center" placeholder={form.salon} disabled/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"85px"}}>Precio</span>
                <input type="text" className="form-control text-center" placeholder={"Bs. "+ form.precio} disabled/>
              </div>
            </div>
          </div>
          <Request>salones</Request>
        </div>
      </div>
      <div className='col-sm-8 border-start border-danger border-3 ps-4'>
        <div className="card mb-3 rounded-4" onClick={(() => precioSalon(7000, "golden"))}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-4' src="../img/salongolden.jpg" alt="Fotografia panoramica del Salón" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title bg-dark text-white text-center py-2 rounded">Salón Golden</h5>
                <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 7000</h6>
                <ul className='card-text lh-sm border border-dark rounded py-2'>
                  <li className='fs-6'><small>Salón de eventos de lujo</small></li>
                  <li className='fs-6'><small>Capacidad para 150 personas</small></li>
                  <li className='fs-6'><small>Cuenta con escenario para música en vivo, barra para bebidas, area wifi y parqueo</small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 rounded-4" onClick={(() => precioSalon(5000, "platinum"))}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-4' src="../img/salonplatinum.jpg" alt="Fotografia panoramica del Salón" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title bg-dark text-white text-center py-2 rounded">Salón Platinum</h5>
                <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 5000</h6>
                <ul className='card-text lh-sm border border-dark rounded py-2'>
                  <li className='fs-6'><small>Salón de eventos de lujo</small></li>
                  <li className='fs-6'><small>Capacidad para 150 personas</small></li>
                  <li className='fs-6'><small>Cuenta con escenario para música en vivo, barra para bebidas, area wifi y parqueo</small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SalonePage


{/* <body class="servicio">
            
            <section class="tarjetas-contenedor">
                <div class="tarjeta-contenedor flotar" onClick={(() => precioSalon(7000, "golden"))}>
                  <div class="tarjeta-img">
                    <img src="../img/salongolden.jpg" alt="Fotografia panoramica del Salón" />
                  </div>
                  <div class="tarjeta-descripcion">
                    <h2 class="tarjeta-titulo">Salón Golden</h2>
                    <div class="tarjeta-descripcion-precio">
                      <h2>Bs. <span class="precio-numero">7000</span></h2>
                      <ul class="tarjeta-caracteristicas">
                        <li>Salón de eventos de lujo</li>
                        <li>Capacidad para 150 personas</li>
                        <li>Cuenta con escenario para música en vivo, barra para bebidas, area wifi y parqueo</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="tarjeta-contenedor flotar" onClick={(() => precioSalon(5000, "platinum"))}>
                  <div class="tarjeta-img">
                    <img src="../img/salonplatinum.jpg" alt="Fotografia panoramica del Salón" />
                  </div>
                  <div class="tarjeta-descripcion">
                    <h2 class="tarjeta-titulo">Salón Platinum</h2>
                    <div class="tarjeta-descripcion-precio">
                      <h2>Bs. <span class="precio-numero">5000</span></h2>
                      <ul class="tarjeta-caracteristicas">
                        <li>Salón de eventos hermoso, pequeño e íntimo</li>
                        <li>Capacidad para 100 personas</li>
                        <li>Escenario para música en vivo y parqueo</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </section>
            <div>
                <Date_finder>salones</Date_finder>
                {
                    form !== null
                    &&
                    <div class="contenedor-derecho contenedor-solicitud-reserva">
                        <p>{"Salon: " + form.salon}</p>
                        <p>{"Precio: Bs. " + form.precio}</p>
                    </div>
                }
                <Request>salones</Request>
            </div>
        </body> */}