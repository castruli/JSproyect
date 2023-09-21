
// DOM CARGA DATOS POR EL USUARIO - COMPROBANTES

const formComprobante = document.getElementById('ingresoComprobante')
const ingresoFecha = document.getElementById('ingresoFecha')
const ingresoImporte = document.getElementById('ingresoImporte')
const ingresoCategoria = document.getElementById('ingresoCategoria') 
const seleccionUsuario = document.getElementById('seleccionUsuario')
const optionUsuario = document.getElementById('optionUsuarios')

// DOM CARGA DATOS POR EL USUARIO - USUARIOS
const tableUsuarios = document.getElementById('tableUsuarios');
const tbodyUsuarios = tableUsuarios.querySelector('tbody');
const alertUsuarios = document.getElementById('alertUsuarios');
const imputParticipante = document.getElementById('imputParticipante')





//DOM SALIDA DATOS COMPROBANTES
const tableComprobantes = document.getElementById('tableComprobantes');
const tbodyComprobantes = tableComprobantes.querySelector('tbody');
const alertComprobantes = document.getElementById('alertComprobantes')





// CLASS PARA EL INGRESO DE COMPROBANTES
class ingresoComprobantes {
    constructor (fecha, importe, categoria,usuario){
        this.fecha = fecha
        this.importe = importe
        this.categoria = categoria
        this.usuario = usuario
    }
}
// ARRAY + LOCALSTORAGE POR CARGA COMPROBANTES

let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('comprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
    agregarComprobante ()

// INGRESO DATOS USUARIO

formComprobante.addEventListener('submit', (e) => {
e.preventDefault()
const comprobante = new ingresoComprobantes (ingresoFecha.value, ingresoImporte.value, ingresoCategoria.value, seleccionUsuario.value)
datosComprobantes.push(comprobante)
localStorage.setItem('comprobantes', JSON.stringify(datosComprobantes))
// BORRADO INGRESO DATOS
ingresoFecha.value = '';
ingresoImporte.value = '';
ingresoCategoria.value = '';
seleccionUsuario.value = '';
// FUNCION DE CARGA DE COMPROBANTES
agregarComprobante ()
})


// DEFINICION DE FUNCION PARA LA CARGA DE COMPROBANTES
function agregarComprobante (){

    // RESET TABLA
    tbodyComprobantes.innerHTML = '';
    // DATOS A CARGAR EN LA TABLA
    datosComprobantes.forEach ( function (dato){
        const newComprobante = document.createElement("tr");
        newComprobante.innerHTML =`
            <td>${dato.fecha}</td>
            <td>${dato.importe}</td>
            <td>${dato.categoria}</td>
            <td>${dato.usuario}</td>
            `;
        bodyTableComprobantes.appendChild(newComprobante);
        });
    // ALERTA CON TABLA SIN DATOS
        if (datosComprobantes.length > 0) {
            alertComprobantes.style.display = "none";
          } else {
            alertComprobantes.style.display = "block";
          }
    }
console.log(datosComprobantes)

