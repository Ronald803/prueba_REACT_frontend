import Swal from 'sweetalert2'
const LoginCorrectly = (msg) => {
    Swal.fire({
        icon: 'success',
        title: msg,
        showConfirmButton: false,
        timer: 1500
      })
}

export default LoginCorrectly;
