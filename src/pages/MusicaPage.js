import React,{useState} from 'react'
import Date_finder from '../components/Date_finder'
import { Request } from '../components/Request'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function MusicaPage() {
    const [form, setForm] = useState({grupo:"",precio:0});
    const precioSalon = (e, f) => {
        cookies.set('precio', e, { path: "/" });
        cookies.set('grupo', f, { path: "/" })
        setForm({
            grupo: f,
            precio: e,
        })
      }
return (
<div className='row'>
  <div className='col-sm-4 ps-4 pt-2'>
    <div className='card '>
      <div>
        <div className='card-header bg-black text-white text-center'>Detalles de Reserva</div>
        <Date_finder>musica</Date_finder>
        <div className='px-2 pt-3'>
          <div class="input-group mb-3">
            <span class="input-group-text" style={{"minWidth":"90px"}} >Artista</span>
            <input type="text" className="form-control text-center" placeholder={form?.grupo} disabled/>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" style={{"minWidth":"90px"}}>Precio</span>
            <input type="text" className="form-control text-center" placeholder={"Bs. "+ form?.precio} disabled/>
          </div>
        </div>
      </div>
      <Request>musica</Request>
    </div>
  </div>
  <div className='col-sm-8 border-start border-danger border-3 ps-4 py-2'>
    <div className="card mb-3 rounded-4" onClick={() => precioSalon(10000, "Sabor Sabor")}>
      <div className="row g-0">
        <div className="col-md-6">
          <img className='img-fluid rounded-4' src="../img/saborsabor.jpg" alt="Fotografia grupo musical Sabor Sabor" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white text-center py-2 rounded">Sabor Sabor</h5>
            <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 10000</h6>
            <ul className='card-text lh-sm border border-dark rounded py-2'>
              <li className='fs-6'><small>"Vida hay una sola, así que a disfrutar con la compañía de nuestra cumbia con sabor"</small></li>
              <li className='fs-6'><small>Más de 12 músicos en escena</small></li>
              <li className='fs-6'><small>Ameniza tu acontecimiento junto a sus éxitos: "Amor mío", "Tú me vas a dejar", "Quién no lloro por amor" y mucho más.</small></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 rounded-4" onClick={() => precioSalon(12000, "Jambao")}>
      <div className="row g-0">
        <div className="col-md-6">
          <img className='img-fluid rounded-4' src="../img/jambao.webp" alt="Fotografia grupo musical Jambao" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white text-center py-2 rounded">Jambao</h5>
            <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 12000</h6>
            <ul className='card-text lh-sm border border-dark rounded py-2'>
              <li className='fs-6'><small>Cumbia Argentina sonidera</small></li>
              <li className='fs-6'><small>Más de 20 años de éxitos</small></li>
              <li className='fs-6'><small>Ameniza tu acontecimiento junto a sus éxitos: "Mi niña hermosa", "Lo que me duele", "La tengo que olvidar" y más.</small></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="card mb-3 rounded-4" onClick={() => precioSalon(14000, "Kalamarka")}>
      <div className="row g-0">
        <div className="col-md-6">
          <img className='img-fluid rounded-4' src="../img/kalamarka.jpg" alt="Fotografia grupo musical Kalamarka" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title bg-dark text-white text-center py-2 rounded">Kalamarka</h5>
            <h6 className="card-title bg-danger text-white text-center py-1 rounded">Bs. 14000</h6>
            <ul className='card-text lh-sm border border-dark rounded py-2'>
              <li className='fs-6'><small>Lo mejor de la música andino amazónico</small></li>
              <li className='fs-6'><small>Ameniza tu acontecimiento junto a sus éxitos: "Cuando florezca el chuño", "Ama Sua, Ama Llulla, Ama Kella", "Pastorcita", "Jaguar" y mucho más.</small></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default MusicaPage

// <div>
//         <body class="servicio">
//           <section class="tarjetas-contenedor">
//             <div class="tarjeta-contenedor flotar" onClick={() => precioSalon(10000, "Sabor Sabor")}>
//               <div class="tarjeta-img">
//                 <img src="../img/saborsabor.jpg" alt="Fotografia grupo musical Sabor Sabor" />
//               </div>
//               <div class="tarjeta-descripcion">
//                 <h2 class="tarjeta-titulo">Sabor Sabor</h2>
//                 <div class="tarjeta-descripcion-precio">
//                   <h2>Bs. <span class="precio-numero">10000</span></h2>
//                   <ul class="tarjeta-caracteristicas">
//                     <li>"Vida hay una sola, así que a disfrutar con la compañía de nuestra cumbia con sabor"</li>
//                     <li>Más de 12 músicos en escena</li>
//                     <li>Ameniza tu acontecimiento junto a sus éxitos: "Amor mío", "Tú me vas a dejar", "Quién no lloro por amor" y mucho más.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div class="tarjeta-contenedor flotar" onClick={() => precioSalon(12000, "Jambao")}>
//               <div class="tarjeta-img">
//                 <img src="../img/jambao.webp" alt="Fotografia grupo musical Jambao" />
//               </div>
//               <div class="tarjeta-descripcion">
//                 <h2 class="tarjeta-titulo">Jambao</h2>
//                 <div class="tarjeta-descripcion-precio">
//                   <h2>Bs. <span class="precio-numero">12000</span></h2>
//                   <ul class="tarjeta-caracteristicas">
//                     <li>Cumbia Argentina sonidera</li>
//                     <li>Más de 20 años de éxitos</li>
//                     <li>Ameniza tu acontecimiento junto a sus éxitos: "Mi niña hermosa", "Lo que me duele", "La tengo que olvidar" y más.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//             <div class="tarjeta-contenedor flotar" onClick={() => precioSalon(14000, "Kalamarka")}>
//               <div class="tarjeta-img">
//                 <img src="../img/kalamarka.jpg" alt="Fotografia grupo musical Kalamarca" />
//               </div>
//               <div class="tarjeta-descripcion">
//                 <h2 class="tarjeta-titulo">Kalamarka</h2>
//                 <div class="tarjeta-descripcion-precio">
//                   <h2>Bs. <span class="precio-numero">14000</span></h2>
//                   <ul class="tarjeta-caracteristicas">
//                     <li>Lo mejor de la música andino amazónico</li>
//                     <li>Ameniza tu acontecimiento junto a sus éxitos: "Cuando florezca el chuño", "Ama Sua, Ama Llulla, Ama Kella", "Pastorcita", "Jaguar" y mucho más.</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </section>
//           <div>
//             <Date_finder>musica</Date_finder>
//             {
//                 form !== null
//                 &&
//                 <div class="contenedor-derecho contenedor-solicitud-reserva">
//                     <p>Artista: {form?.grupo}</p>
//                     <p>Precio: Bs. {form?.precio}</p>
//                 </div>
//             }
//             <Request>musica</Request>
//           </div>
//         </body>
//       </div>