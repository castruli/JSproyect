// MENSAJE DE BIENVENIDA + EXPLICACION DE PAGINA
// LIMITANTE A PRIMER INGRESO UTILIZANDO LOCALSTORAGE
// UTILIZACION DE PROMISE PARA SECUENCIA DE INDICACIONES AL CLIENTE
if (!localStorage.getItem('msjBienvendia')) {
  function promesaTimer() {
    // MENSAJE DE BIENVENIDA PRINCIPAL CON EXPLICACION DEL SITIO
    return new Promise((resolve) => {
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Con Tu pre$upue$to podrás llevar el control de tus gastos durante tu viaje. Solamente tenes que cargar los participantes y los gastos de cada uno!',
        icon: 'success',
        confirmButtonText: 'Ingresar',
        confirmButtonColor: 'orange',
        iconColor: 'orange',
        timer: 10000,
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
  // MENSAJE INDICATIVO DE LOGIN
  function alert2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        Swal.fire({
          text: 'Desde el MENU LATERAL podrás inciar tu sesión',
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
      }, 2000);
    });
  }
  // MENSAJE INDICATIVO DE CARGA DE PARTICIPANTES
  function alert3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        Swal.fire({
          text: 'Desde NUEVO PARTICIPANTE añadirás a quienes viajan',
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
      }, 2000);
    });
  }
  // MENSAJE INDICATIVO DE CARGA DE COMPROBANTES
  function alert4() {
    return new Promise((resolve) => {
      setTimeout(() => {
        Swal.fire({
          text: 'Desde NUEVO COMPROBANTE ingresa los gastos de cada uno',
          confirmButtonColor: 'orange',
          textColor: 'white',
          customClass: {
            popup: 'descripcionAlert4',
          }
        }).then(() => {
          resolve();
        });
      }, 2000);
    });
  }
  promesaTimer();
  localStorage.setItem('msjBienvendia', 'true');
}

































