// DOM USUARIOS
const sessionConfirm = document.getElementById('sessionConfirm')
const btnConfirm = document.getElementById('btnConfirm')
const tableUsuarios = document.getElementById('tableUsuarios');
const tbodyUsuarios = tableUsuarios.querySelector('tbody');
const alertUsuarios = document.getElementById('alertUsuarios');
const imputParticipante = document.getElementById('imputParticipante')
const startSession = document.getElementById('startSession')
const seccionControl = document.getElementById('seccionControl')
const trTable = seccionControl.querySelector('tr')
const userSession = localStorage.getItem('usuarioLogeado');


// SIMULACION REGISTRACION EN CUENTA 
if (userSession) {
  userLogeado(userSession);  
} else {
  startSession.style.display = "block";
}
  //INICIO SESIÓN
startSession.addEventListener('submit', (e) => {
  e.preventDefault();
  const userSessionInput = document.getElementById('userSessionInput');
  const newUserSession = userSessionInput.value;
  localStorage.setItem("usuarioLogeado", newUserSession)
  userLogeado (newUserSession)
})
//FUNCION MSJ BIENVENIDA A LOGIN REGISTRADO
function userLogeado (user){
  const userLogin = document.createElement("h2");
  userLogin.innerHTML =`
    <h2 class="bg-dark-subtle">Bienvenido ${user}</h2>
    `;
  sessionConfirm.appendChild(userLogin);
  startSession.style.display = "none";
}

//CLASS PARA INGRESO USUARIOS
class ingresoUsuarios {
  constructor (nombre, banco, cbu){
      this.nombre = nombre
      this.banco = banco
      this.cbu = cbu
  }
} 

//ALMACENAMIENTO DE USUARIOS CARGADOS
let datosUsuarios = []
const jsonUsuarios = localStorage.getItem('usuarios')
  if (jsonUsuarios){
      datosUsuarios = JSON.parse(jsonUsuarios)
  }
agregarUsuarios ()


//FORMULARIO DE CARGA USUARIOS 
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
  //DOM FORMULARIO USUARIO DESDE SWEETALERT2
  const nombre = document.getElementById('ingresoNombreU');
  const banco = document.getElementById('ingresoBancoU');
  const cbu = document.getElementById('ingresoCBUU');
  const formUsuarios = document.getElementById('formUsuario');
  //SUBMIT FORMUALRIO-ENVIO DESDE SWEETALERT2 
  formUsuarios.addEventListener('submit', (event) => {
    event.preventDefault();
    const usuario = new ingresoUsuarios (nombre.value, banco.value, cbu.value)
    datosUsuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(datosUsuarios))
    // BORRADO INGRESO DATOS EN FORM PARA NUEVA CARGA
    nombre.value = '';
    banco.value = '';
    cbu.value = '';
    //CARGA DE USUARIOS + ACTUALIZACIONES TABLAS
    agregarUsuarios ()
    agregarResponsable ()
    titleTable ()
  })
})
agregarUsuarios ()
agregarResponsable ()
titleTable ()

//FUNCION PARA LA CARGA DE USUARIOS EN TABLA DE PARTICIPANTES
function agregarUsuarios (){
 //RESET DE TABLA //
 tbodyUsuarios.innerHTML = '';
 // DATOS A CARGAR EN LA TABLA DE PARTICIPANTES //
 datosUsuarios.forEach ( function (dato){
  const newUsuario = document.createElement("tr");
  newUsuario.innerHTML =`
      <td class="bg-dark-subtle" >${dato.nombre}</td>
      <td class="bg-dark-subtle" >${dato.banco}</td>
      <td class="bg-dark-subtle" >${dato.cbu}</td>
      `;
  bodyTableUsuarios.appendChild(newUsuario);
  });
 // ALERTA TABLA SIN DATOS
  if (datosUsuarios.length > 0) {
    alertUsuarios.style.display = "none";
  } else {
    alertUsuarios.style.display = "block";
  }
}
console.log(datosUsuarios)


//FUNCION LIMITANTE USUARIO RESPONSABLE DEL GASTOS
function agregarResponsable (){
  //RESET OPCIONES
  seleccionUsuario.innerHTML = '<option selected>Seleccione usuario</option>';
  //BUSQUEDA DE LOS USUARIOS DISPONIBLES
  datosUsuarios.forEach (function (datos) {
    const fila = document.createElement ("option");
    fila.innerHTML =`
    <option value="${datos.nombre}">${datos.nombre}</option>
    `;
    seleccionUsuario.appendChild(fila);  
  });
}

//FUNCION PARA AGREGAR LOS PARTICIPANTES A CONTRAL DE INGRESOS
function titleTable (){
  //RESET OPCIONES
  trTable.innerHTML = '';
  //BUSQUEDA DE LOS USUARIOS DISPONIBLES
  datosUsuarios.forEach (function (datos) {
    const title = document.createElement ("th");
    title.innerHTML =`
    <th scope="col">${datos.nombre}</th>
    `;
    tableTr.appendChild(title);  
  });
}

//FUNCION PARA AGREGAR LOS PARTICIPANTES A CONTROL DE INGRESOS
//BUSQUEDA DE USUARIOS CARGADOS DESDE DATOS DEL USUARIO
const pruebaUsuario = datosUsuarios.map(n => n.nombre)
// FUNCION DE CONTROL - RECORRO NUEVO ARRAY DE USUARIO CARGADOS
// SE AGREGA EL TOTAL DE GASTOS CARGADOS AL MOMENTO POR EL USUARIO

// FALTANTE: ACTUALIZACION DE TABLA. AL CARGAR UN NUEVO COMPROBANTE ESTE VALOR NO SE ACTUALIZA AUTOMATICAMENTE.
function usuariosControl (){
for (let i = 0; i < pruebaUsuario.length; i++) {
  busquedaUsuario(pruebaUsuario[i]) 
  function busquedaUsuario (us){
      let total = 0;
      const usuarioBuscado = datosComprobantes.filter( u => u.usuario === us);
      const importesUsuarios = usuarioBuscado.map(v => parseFloat(v.importe)) 
      importesUsuarios.forEach(p => { total = total + p })
      const acumuladoUsuario = document.createElement ("td");
      acumuladoUsuario.innerHTML =`
      <td>${total}</td>
      `;
      tbodyIngresosInner.appendChild(acumuladoUsuario);  
  }
}
}








  



























