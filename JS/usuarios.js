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

//CLASS USUARIOS
class ingresoUsuarios {
  constructor (nombre, banco, cbu){
      this.nombre = nombre
      this.banco = banco
      this.cbu = cbu
  }
} 

//LOCALSTORAGE USUARIOS
let datosUsuarios = []
const jsonUsuarios = localStorage.getItem('usuarios')
  if (jsonUsuarios){
      datosUsuarios = JSON.parse(jsonUsuarios)
  }
agregarUsuarios ()


//INICIO SESIÓN
startSession.addEventListener('submit', (e) => {
  e.preventDefault();
  const userSession = startSession.querySelector('userSession')
  localStorage.setItem("usuarioLogeado", userSession)
  userLogeado ()
})

//FUNCION DE LOGIN USUARIO
function userLogeado (){
  const userLogin = document.createElement("h2");
  userLogin.innerHTML =`
    <h2 class="bg-dark-subtle">Bienvenido ${userSession.value}</h2>
    `;
  sessionConfirm.appendChild(userLogin);
  startSession.style.display = "none";
}


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
  //DOM FORMULARIO USUARIO
  const nombre = document.getElementById('ingresoNombreU');
  const banco = document.getElementById('ingresoBancoU');
  const cbu = document.getElementById('ingresoCBUU');
  const formUsuarios = document.getElementById('formUsuario');
  //SUBMIT FORMUALRIO-ENVIO
  formUsuarios.addEventListener('submit', (event) => {
    event.preventDefault();
    const usuario = new ingresoUsuarios (nombre.value, banco.value, cbu.value)
    datosUsuarios.push(usuario)
    localStorage.setItem('usuarios', JSON.stringify(datosUsuarios))
    // BORRADO INGRESO DATOS EN FORM PARA NUEVA CARGA
    nombre.value = '';
    banco.value = '';
    cbu.value = '';
    //CARGA DE USUARIOS
    agregarUsuarios ()
    agregarResponsable ()
    titleTable ()
  })
})

//FUNCION CARGA DE USUARIOS
function agregarUsuarios (){
 //RESET TABLA USUARIO CARGADOS//
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
 // ALERTA TABLA SIN DATOS
  if (datosUsuarios.length > 0) {
    alertUsuarios.style.display = "none";
  } else {
    alertUsuarios.style.display = "block";
  }
}
console.log(datosUsuarios)
agregarResponsable ()
titleTable ()

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



//FUNCION TABLE CONTROL POR USUARIO
function titleTable (){
  //RESET OPCIONES
  trTable.innerHTML = '';
  //BUSQUEDA DE LOS USUARIOS DISPONIBLES
  datosUsuarios.forEach (function (datos) {
    const title = document.createElement ("th");
    title.innerHTML =`
    <th class="bg-dark-subtle" scope="col">${datos.nombre}</th>
    `;
    trTable.appendChild(title);  
  });
}





































