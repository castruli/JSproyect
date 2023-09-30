function promesaTimer() {
  return new Promise((resolve) => {
    Swal.fire({
      title: '¡Bienvenido!',
      text: 'Con Tu pre$upue$to llevar el control de tus gastos en tu viaje nunca fue tan sencilloo. deberas registrar los participantes y cargar tus comprobantes! Tendrás el detalle a dividir por cada uno!',
      icon: 'success',
      confirmButtonText: 'Ingresar',
      confirmButtonColor: 'orange',
      iconColor: 'orange',
      timer: 1000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      onClose: () => {
        resolve();
      }
    }).then(() => {
      alert2()
    });
  });
}

function alert2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      Swal.fire({
        text: 'Desde el menu lateral podrás iniciar sesión',
        confirmButtonColor: 'orange',
        textColor: 'white',
        customClass: {
          popup: 'descripcionAlert2',
        },
        onClose: () => {
          resolve();
        }
      }).then(() =>{
        alert3 ()
      });
    }, 1000);
  });
}

function alert3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      Swal.fire({
        text: 'Desde NUEVO PARTICIPANTE ingresaran quien carga los gastos',
        confirmButtonColor: 'orange',
        textColor: 'white',
        customClass: {
          popup: 'descripcionAlert3',
        },
        onClose: () => {
          resolve();
        }
      }).then(() =>{
        alert4 ()
      });
    }, 1000);
  });
}

function alert4() {
  return new Promise((resolve) => {
    setTimeout(() => {
      Swal.fire({
        text: 'Desde NUEVO COMPROBANTE podrás ingresar los gastos',
        confirmButtonColor: 'orange',
        textColor: 'white',
        customClass: {
          popup: 'descripcionAlert4',
        }
      }).then(() => {
        resolve();
      });
    }, 1000);
  });
}

promesaTimer();

































// function promesaTimer() {
//   return new Promise((resolve) => {
//     Swal.fire({
//       title: '¡Bienvenido!',
//       text: 'Con Tu pre$upue$to llevar el control de tus gastos en tu viaje nunca fue tan sencilloo. deberas registrar los participantes y cargar tus comprobantes! Tendrás el detalle a dividir por cada uno!',
//       icon: 'success',
//       confirmButtonText: 'Ingresar',
//       confirmButtonColor: 'orange',
//       iconColor: 'orange',
//       timer: 1000, 
//       timerProgressBar: true,
//       onBeforeOpen: () => {
//         Swal.showLoading();
//       },
//       onClose: () => {
//         resolve();
//       }
//     }).then(() => { alert2 ()
//       .then(() => { alert3 ()
//       .then(() => { alert4 ()
//     });
//   });
// });
// });
// }



// function alert2 () {
//   return new Promise((resolve) =>
//   setTimeout (() => {
//   Swal.fire({
//     // title: 'SweetAlert 2',
//     text: 'Desde el menu lateral podrás iniciar sesión',
//     confirmButtonColor: 'orange',
//     textColor: 'white',
//     // icon: 'success',
//     customClass: {
//       popup: 'descripcionParticipantes',},
//     onClose: () => {
//     resolve();
//     }
//   });
// }, 1000,))}

// function alert3 () { 
//   return new Promise ((resolve) =>
//   setTimeout (() => {
//   Swal.fire({
//     // title: 'SweetAlert 2',
//     text: 'Desde nuevo participante podrás ingresar usuarios',
//     confirmButtonColor: 'orange',
//     textColor: 'white',
//     // icon: 'success',
//     customClass: {
//     popup: 'descripcionParticipantes',},
//     onClose: () => {
//     resolve();
//         }
//   });
// }, 1000,))}

// function alert4 () { 
//   return new Promesi ((resolve) =>
//   setTimeout (() => {
//   Swal.fire({
//     // title: 'SweetAlert 2',
//     text: 'Desde nuevo comprobantes podrás ingresar tus gastos',
//     confirmButtonColor: 'orange',
//     textColor: 'white',
//     // icon: 'success',
//     customClass: {
//       popup: 'descripcionParticipantes',}
//   });
// }, 1000,))}

// promesaTimer()