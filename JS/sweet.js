
// MSJ DE BIENVENIDA A PAGINA //  



Swal.fire({
  title: '¡Bienvenido!',
  text: '',
  icon: 'success',
  confirmButtonText: 'Ingresar',
  confirmButtonColor: 'orange',
  iconColor: 'orange'
})

// MSJ DE CARGA NUEVO USUARIO //

// CLASS PARA EL INGRESO DE USUARIOS
class ingresoUsuarios {
  constructor (nombre, banco, cbu){
      this.nombre = nombre
      this.banco = banco
      this.cbu = cbu

  }
}


// ARRAY + LOCALSTORAGE POR CARGA USUARIOS

let datosUsuarios = []
const jsonUsuarios = localStorage.getItem('usuarios')
  if (jsonUsuarios){
      datosUsuarios = JSON.parse(jsonUsuarios)
  }
  agregarUsuarios ()


// FORMULARIO DE CARGA CON SWEETALERT2 //
// DEFINO EVENTO CLICK SOBRE BOTON NUEVO PARTICIPANTE //
imputParticipante.addEventListener('click', (u) => {
  u.preventDefault()
  // APERTURA DE MSJ CON SWEETALERT2 //
  Swal.fire({
    title: '¡Ingrese nuevo participante!',
    html:
        '<form id="formUsuario">' +
        '   <input type="text" id="ingresoNombreU" placeholder="Nombre y Apellido" required>' +
        '   <input type="text" id="ingresoBancoU" placeholder="Entidad bancaria" required>' +
        '   <input type="number" id="ingresoCBUU" placeholder="22 digitos" required>' +
        '   <div></div>' +
        '   <button class="btn btn-warning" type="submit">Enviar</button>' +
        '</form>',
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'Finalizar',
    confirmButtonColor: 'orange',
    backdrop: true,
    allowOutsideClick: false,
    focusConfirm: false,
  })
  // DEFINO LAS VARIABLES DEL FORM //
    const nombre = document.getElementById('ingresoNombreU');
    const banco = document.getElementById('ingresoBancoU');
    const cbu = document.getElementById('ingresoCBUU');
    const formUsuarios = document.getElementById('formUsuario');
    // DEFINO LA ACCION AL ENVIAR EL FORM //
    formUsuarios.addEventListener('submit', (event) => {
      event.preventDefault();
      const usuario = new ingresoUsuarios (nombre.value, banco.value, cbu.value)
     
      datosUsuarios.push(usuario)
      
      localStorage.setItem('usuarios', JSON.stringify(datosUsuarios))
    
      // BORRADO INGRESO DATOS EN FORM PARA NUEVA CARGA
      nombre.value = '';
      banco.value = '';
      cbu.value = '';
      // FUNCION DE CARGA DE USUARIOS
      agregarUsuarios ()
      
  })
})
// DEFINICION DE FUNCION PARA LA CARGA DE USUARIOS
function agregarUsuarios (){
 // RESET TABLA USUARIO CARGADOS//
 tbodyUsuarios.innerHTML = '';
 // DATOS A CARGAR EN LA TABLA DE USUARIOS //
 datosUsuarios.forEach ( function (dato){
  const newUsuario = document.createElement("tr");
  newUsuario.innerHTML =`
      <td class="bg-dark-subtle" >${dato.nombre}</td>
      <td class="bg-dark-subtle" >${dato.banco}</td>
      <td class="bg-dark-subtle" >${dato.cbu}</td>
      `;
  bodyTableUsuarios.appendChild(newUsuario);
  });
 // ALERTA CON TABLA SIN DATOS
  if (datosUsuarios.length > 0) {
      alertUsuarios.style.display = "none";
    } else {
      alertUsuarios.style.display = "block";
    }
 }
console.log(datosUsuarios)

const user = datosUsuarios.map((u)=> u.nombre)
// function cargar (name){
//   console.log(name)
// }

// cargar (...user)
console.log(...user)

////////////////////////////////////////////////////////////
















// function start () {
//     alert ('Bienvenido')
// }
// function completed (){
//     alert ('¡Carga completa!')
// }

// function premium (){
//     alert ('Opción disponible para usuarios premium')
// }

// function seleccCategoria (){
//     alert ('Seleciona una catoria:'+ '\n' + 'Alojamiento' + '\n' + 'Traslado' + '\n' + 'Salidas' + '\n' + 'Dia a Dia' + '\n' + 'Higiene' + '\n' + 'Otro')
// }
// const tiposCategorias = {
//     alojamiento : 'Alojamiento',
//     traslado: 'Traslado',
//     salidas :'Salidas',
//     dia : 'Dia a Dia',
//     higiene: 'Higiene',
//     otro: 'Otro'
// }
// //agregar al seleccionar otro msj de premium

// function numeroDeParticipantes (){
//     cantParticipantes = parseInt(prompt('¿Cuantos participantes serán?'))
//     while (isNaN (cantParticipantes)){
//       cantParticipantes = parseInt(prompt('Por favor ingrese un valor numerico'))
//       return cantParticipantes
//   }
// }

// start ()
// numeroDeParticipantes ()
// console.log (cantParticipantes)

// class ingresoParticipantes {
//     constructor(nombre, mail, banco, cbu) {
//       this.nombre = nombre
//       this.mail = mail
//       this.banco = banco
//       this.cbu = cbu
//     }
// }
// if (cantParticipantes < 10){
//   const datosParticipantes = []
//   for (let i = 0; i < cantParticipantes; i++) {
//     const nombre = prompt("Ingresar nombre")
//     const mail = prompt('Ingrese mail')
//     const banco = prompt ('Ingrese Banco')
//     const cbu = prompt ('Ingrese CBU')
//     completed ()   
//     const participante = new ingresoParticipantes(nombre, mail, banco, cbu)
//     datosParticipantes.push(participante)
//   }
//   console.log (datosParticipantes)
  
  
//   seleccCategoria ()
//   console.log (tiposCategorias)
//   const categorias = prompt ('Ingrese categoria')
//   let numeroDeComprobantes = parseInt(prompt('Ingrese cantidad de comprobantes a registrar'))
//   while (isNaN(numeroDeComprobantes)){
//     numeroDeComprobantes = prompt( 'ingrese un monto válido')
//     }


//     class ingresoComprobantes {
//     constructor (categoria,fecha,importe,abonado){
//         this.categoria = categoria
//         this.fecha = fecha
//         this.importe = importe
//         this.abonado = abonado
//     }
//     }
//     const datosComprobantes = []
//     for (let i = 0; i < numeroDeComprobantes; i++) {
//       const categoria = categorias
//       const fecha = prompt('Ingrese fecha')
//       const importe = parseFloat(prompt ('Ingrese Monto'))
//       const abonado = prompt ('¿Quién abono?')
//       completed ()
//       const comprobante = new ingresoComprobantes(categoria,fecha,importe,abonado)
//       datosComprobantes.push(comprobante)
//     }
//     console.log (datosComprobantes)

//     let totalImporte = 0;
//     const importesCategoria = datosComprobantes.map(v => v.importe) 

//     for (const i of importesCategoria) { 
//     totalImporte = totalImporte + i 
//     }
//     console.log(totalImporte)

//     alert ('El total ingresado es de $' + ' ' + totalImporte + ' en la categoria' + ' ' + categorias)
// }
// else {
//      premium ()
// }
