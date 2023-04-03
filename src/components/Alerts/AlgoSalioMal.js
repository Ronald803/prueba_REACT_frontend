import Swal from 'sweetalert2'

const AlgoSalioMal = (msg) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal',
        footer: msg
      })
}

export default AlgoSalioMal;
