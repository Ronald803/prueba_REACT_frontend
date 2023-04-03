import Swal from 'sweetalert2'

const Instructions = () => {
  Swal.fire({
    icon: 'info',
    title: 'Información de Uso',
    //text: 'Primero, verifíca la disponibilidad del servicio en la fecha que lo requieras en el calendario. Segundo, elige los detalles del servicio. Tercero, realiza la reserva',
    html:
      '<b>Primer Paso. </b>' +
      'Verifíca la disponibilidad del servicio en el cuadro rosa, introduce la fecha requerida y presiona el botón "Consultar".' +
      '<br/>'+
      '<img src="../../img/disponibilidad.png" alt="Fotografia panoramica del Salón" />'+
      '<br/>'+
      
      '<b>Segundo Paso. </b>' +
      'Elige los detalles del servicio para una cotización precisa.'+
      '<br/>'+
      
      '<b>Tercero Paso. </b>' +
      'Ingresa el nombre de tu evento y realiza la reserva en el cuadro verde claro.'+
      '<br/>'+
      '<img src="../../img/reservar.png" alt="Fotografia panoramica del Salón" />',
    footer: 'No olvides que debes iniciar sesión para reservar (Tercer Paso)',
  })
}

export default Instructions;


//html:
//      'You can use <b>bold text</b>, ' +
//      '<a href="//sweetalert2.github.io">links</a> ' +
//      'and other HTML tags',