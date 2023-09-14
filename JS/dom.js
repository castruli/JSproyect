class ingresoComprobantes {
    constructor (fecha, importe, categoria,usuario){
        this.fecha = fecha
        this.importe = importe
        this.categoria = categoria
        this.usuario = usuario
    }
}



// DOM CARGA DATOS POR EL USUARIO //
const formComprobante = document.getElementById('ingresoComprobante')
const ingresoFecha = document.getElementById('ingresoFecha')
const ingresoImporte = document.getElementById('ingresoImporte')
const ingresoCategoria = document.getElementById('ingresoCategoria') 
const seleccionUsuario = document.getElementById('seleccionUsuario')
const optionUsuario = document.getElementById('optionUsuarios')


//DOM SALIDA DATOS DEL USUARIO //
const dataTable = document.getElementById('dataTable');
const tbody = dataTable.querySelector('tbody');

const alertComprobantes = document.getElementById('alertComprobantes')





// Creo array con datos desde localStorage, si los hay.
let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('comprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
    agregarComprobante ()

// Guardado de datos ingresados mediante form en Array y localStorage

formComprobante.addEventListener('submit', (e) => {
e.preventDefault()
const comprobante = new ingresoComprobantes (ingresoFecha.value, ingresoImporte.value, ingresoCategoria.value, seleccionUsuario.value)
datosComprobantes.push(comprobante)
localStorage.setItem('comprobantes', JSON.stringify(datosComprobantes))
//limpio el form
ingresoFecha.value = '';
ingresoImporte.value = '';
ingresoCategoria.value = '';
seleccionUsuario.value = '';
//aplicado función para carga de datos en table
agregarComprobante ()

})


// carga de comprobante en table
function agregarComprobante (){

    // limpio table
    tbody.innerHTML = '';
    // lleno la table con datos cargados, si los hay
    // ¿¿¿¿¿¿PUEDO UTILIZAR FUNCION ANONIMA???? VER VER VER 
    datosComprobantes.forEach ( function (dato){
        const newComprobante = document.createElement("tr");
        newComprobante.innerHTML =`
            <td>${dato.fecha}</td>
            <td>${dato.importe}</td>
            <td>${dato.categoria}</td>
            <td>${dato.usuario}</td>
            `;
        bodyTable.appendChild(newComprobante);
        });

        if (datosComprobantes.length > 0) {
            alertComprobantes.style.display = "none";
          } else {
            alertComprobantes.style.display = "block";
          }
    }
    agregarComprobante ()




console.log(datosComprobantes)
