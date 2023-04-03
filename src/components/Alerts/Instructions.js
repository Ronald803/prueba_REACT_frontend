import Swal from 'sweetalert2'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const nombre = cookies.get('nombreusuario')
let mensaje = '<b>- </b> Si aún no te has registrado, hazlo haciendo click en el botón <b>Registrarse</b>.<br/><b>- </b>Si ya te registraste tu puedes <b>Iniciar Sesión</b>.<hr/>' 
if(nombre){
  console.log({nombre});
  mensaje = ''
}

const Instructions = () => {
  Swal.fire({
    icon: 'info',
    title: 'Información de Uso',
    showConfirmButton: false,
    html:
      `${mensaje}`+
      '<b>Primer Paso. </b>' +
      'Verifíca la disponibilidad del servicio en el cuadro rosa, introduce la fecha requerida y presiona el botón "Consultar".' +
      '<br/>'+
      '<img src="../../img/disponibilidad.png" alt="Imagen del cuadro de disponibilidad" />'+
      '<br/>'+      
      '<b>Segundo Paso. </b>' +
      'Elige los detalles del servicio para una cotización precisa.'+
      '<br/>'+
      '<b>Tercero Paso. </b>' +
      'Ingresa el nombre de tu evento y realiza la reserva en el cuadro verde claro.'+
      '<br/>'+
      '<img src="../../img/reservar.png" alt="Imagen del cuadro de reservar" />',
    footer: 'No olvides que debes iniciar sesión para reservar (Tercer Paso)',
  })
}

export default Instructions;


//html:
//      'You can use <b>bold text</b>, ' +
//      '<a href="//sweetalert2.github.io">links</a> ' +
//      'and other HTML tags',

// 1. si aún no te has registrado, hazlo haciendo click en el botoón de registro
// 2. Inicia Sesión