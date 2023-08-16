import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'

const cookies = new Cookies();
function ComidaPage() {
    const [form, setForm] = useState({plato:null,precioPlato:0,precio:0})
    const precioPlatoComida = (e, f) => {
        cookies.set('plato', f, { path: "/" })
        setForm({
          plato: f,
          precioPlato: e,
          precio: e * cookies.get('invitados'),
        })
        cookies.set('precio', e * cookies.get('invitados'), { path: "/" });
    }
    const cantidadInvitados = e => {
        setForm({
            ...form,
            invitados: e.target.value,
            precio: e.target.value * form?.precioPlato,
        })
        cookies.set('invitados', e.target.value, { path: "/" })
        cookies.set('precio', e.target.value * form.precioPlato, { path: "/" })
    }
return (
    <div className='row'>
      <div className='col-sm-4 ps-4 pt-2'>
        <div className='card '>
          <div>
            <div className='card-header bg-black text-white text-center'>Detalles de Reserva</div>
            <Date_finder>comida</Date_finder>
            <div className='px-2 pt-3'>
              <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"90px"}}>Plato</span>
                <input type="text" className="form-control text-center" placeholder={form.plato} disabled/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"90px"}}>Invitados</span>
                <input type="number" className="form-control text-center" onChange={(e)=>cantidadInvitados(e)}/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" style={{"minWidth":"90px"}}>Precio</span>
                <input type="text" className="form-control text-center" placeholder={"Bs. " + form?.precio} disabled/>
              </div>
            </div>
          </div>
          <Request>comida</Request>
        </div>
      </div>
      <div className='col-sm-8 border-start border-danger border-3 ps-4 py-2'>
        <div className="card mb-3 rounded-4" onClick={(() => precioPlatoComida(15, "Lechon"))}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-4' src="../img/lechonhorno.jpg" alt="Fotografia plato lechón al horno" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title bg-dark text-white text-center py-2 rounded">Lechón al Horno</h5>
                <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 15 el plato</h6>
                <ul className='card-text lh-sm border border-dark rounded py-2'>
                  <li className='fs-6'><small>Lechón crocante al horno con sabor a casa "Cheff Janne"</small></li>
                  <li className='fs-6'><small>Guarniciones: papa, camote, postre, choclos tiernos</small></li>
                  <li className='fs-6'><small>Ensalada y llajuita incluidas</small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3 rounded-4" onClick={(() => precioPlatoComida(20, "Pique Macho"))}>
          <div className="row g-0">
            <div className="col-md-6">
              <img className='img-fluid rounded-4' src="../img/piquemacho.webp" alt="Fotografia plato Pique Macho" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title bg-dark text-white text-center py-2 rounded">Pique Macho</h5>
                <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 20 el plato</h6>
                <ul className='card-text lh-sm border border-dark rounded py-2'>
                  <li className='fs-6'><small>Sabroso y picantito</small></li>
                  <li className='fs-6'><small>Papas fritas en gajos, carne de res, chorizo, huevo duro, cebolla, tomate</small></li>
                  <li className='fs-6'><small>Aderezos incluidos</small></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComidaPage

{/* <div>        
<body class="servicio">
  <section class="tarjetas-contenedor">
    <div class="tarjeta-contenedor flotar" onClick={(() => precioPlatoComida(15, "Lechon"))}>
      <div class="tarjeta-img">
        <img src="../img/lechonhorno.jpg" alt="Fotografia plato lechon al horno" />
      </div>
      <div class="tarjeta-descripcion">
        <h2 class="tarjeta-titulo">Lechón al horno</h2>
        <div class="tarjeta-descripcion-precio">
          <h2>Bs. <span class="precio-numero">15</span> el plato</h2>
          <ul class="tarjeta-caracteristicas">
            <li>Lechón crocante al horno con sabor a casa "Cheff Janne"</li>
            <li>Guarniciones: papa, camote, postre, choclos tiernos</li>
            <li>Ensalada y llajuita incluidas</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tarjeta-contenedor flotar" onClick={(() => precioPlatoComida(20, "Pique Macho"))}>
      <div class="tarjeta-img">
        <img src="../img/piquemacho.webp" alt="Fotografia plato Pique Macho" />
      </div>
      <div class="tarjeta-descripcion">
        <h2 class="tarjeta-titulo">Pique Macho</h2>
        <div class="tarjeta-descripcion-precio">
          <h2>Bs. <span class="precio-numero">20</span> el plato</h2>
          <ul class="tarjeta-caracteristicas">
            <li>Sabroso y picantito</li>
            <li>Papas fritas en gajos, carne de res, chorizo, huevo duro, cebolla, tomate</li>
            <li>Aderezos incluidos</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div>
    <Date_finder>comida</Date_finder>
    {
        form!==null
        &&
        <div class="contenedor-derecho contenedor-solicitud-reserva">
            <label>
                <span>Invitados:</span>
                <input type="number" className='form-control' name="invitados" onChange={(e)=>cantidadInvitados(e)} />
            </label>
            <p>{"Plato: " + form?.plato}</p>
            {
                form.precio > 0
                &&
                <p>{"Precio: Bs. " + form?.precio}</p>
            }
        </div>  
    }
    <Request>comida</Request>
  </div>
</body>
</div> */}