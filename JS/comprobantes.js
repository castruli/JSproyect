//DOM COMPROBANTES
const formComprobante = document.getElementById('ingresoComprobante')
const ingresoFecha = document.getElementById('ingresoFecha')
const ingresoImporte = document.getElementById('ingresoImporte')
const ingresoCategoria = document.getElementById('ingresoCategoria') 
const seleccionUsuario = document.getElementById('seleccionUsuario')
const optionUsuario = document.getElementById('optionUsuarios')
const tableComprobantes = document.getElementById('tableComprobantes');
const tbodyComprobantes = tableComprobantes.querySelector('tbody');
const alertComprobantes = document.getElementById('alertComprobantes')

//CLASS COMPROBANTES
class ingresoComprobantes {
    constructor (fecha, importe, categoria,usuario){
        this.fecha = fecha
        this.importe = importe
        this.categoria = categoria
        this.usuario = usuario
    }
}

//LOCALSTORAGE COMPROBANTES
let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('comprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
agregarComprobante ()

//FORMULARIO DE CARGA COMPROBANTES 
formComprobante.addEventListener('submit', (e) => {
    e.preventDefault()
    const comprobante = new ingresoComprobantes (ingresoFecha.value, ingresoImporte.value, ingresoCategoria.value, seleccionUsuario.value)
    datosComprobantes.push(comprobante)
    localStorage.setItem('comprobantes', JSON.stringify(datosComprobantes))
    //RESEST IMPUT FORMULARIO
    ingresoFecha.value = '';
    ingresoImporte.value = '';
    ingresoCategoria.value = '';
    seleccionUsuario.value = '';
    //CARGA DE COMPROBANTES
    agregarComprobante ()
})

//FUNCION CARGA DE COMPROBANTES
function agregarComprobante (){
    //RESET TABLA
    tbodyComprobantes.innerHTML = '';
    //CARGA + CREACION TABLA
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
    //VISUALIZACION TABLA SIN DATOS
    if (datosComprobantes.length > 0) {
        alertComprobantes.style.display = "none";
      } else {
        alertComprobantes.style.display = "block";
    }
}
console.log(datosComprobantes)

