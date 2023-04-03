import React,{useEffect} from 'react';
import Swal from 'sweetalert2'

const Welcome = () => {
  //  Swal.fire('Any fool can use a computer')
    useEffect( ()=>{
        Toast.fire();
    },[] )
    const Toast = Swal.mixin({
        titleText: "Bienvenidos a Eventos Gran Poder",
        text: "Elige el servicio que gustes haciendo click en las imagenes"
    })
    return (
        <div>
        </div>
    );
}

export default Welcome;
