const ingresoFecha = document.getElementById('ingresoFecha')
const ingresoImporte = document.getElementById('ingresoImporte')
const ingresoCategoria = document.getElementById('ingresoCategoria') 
const seleccionUsuario = document.getElementById('seleccionUsuario')
const fechaTable = document.getElementById ('fechaTable')
const ingresoTable = document.getElementById ('ingresoTable') 
const categoriaTable = document.getElementById ('categoriaTable')
const usuarioTable = document.getElementById ('usuarioTable')
const alertComprobantes = document.getElementById('alertComprobantes')
const formComprobante = document.getElementById('ingresoComprobante')

class ingresoComprobantes {
    constructor (fecha, importe, categoria,usuario){
        this.fecha = fecha
        this.importe = importe
        this.categoria = categoria
        this.usuario = usuario
    }
}

// REVISAR ESTA FUNCION. AL ACTUALZIAR PAGINA NO VUELVE A TRAER DATOS, DUPLICA EL INGRESO EN CADA LINEA, NO GUARDA ARRAY
let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('datosComprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
agregarComprobante ()


formComprobante.addEventListener('submit', e => {
e.preventDefault()
const comprobante = new ingresoComprobantes (ingresoFecha.value, ingresoImporte.value, ingresoCategoria.value, seleccionUsuario.value)
datosComprobantes.push(comprobante)
localStorage.setItem('comprobantes', JSON.stringify(datosComprobantes))
agregarComprobante ()

ingresoFecha.value = '';
      ingresoImporte.value = '';
      ingresoCategoria.value = '';
      seleccionUsuario.value = '';
})



function agregarComprobante (){
    const newComprobante = document.createElement("tr");
    const fechaTable = document.createElement("td");
    fechaTable.innerHTML = datosComprobantes.map( f => f.fecha)
    const ingresoTable = document.createElement("td");
    ingresoTable.innerHTML = datosComprobantes.map( i => i.importe)
    const categoriaTable = document.createElement("td");
    categoriaTable.innerHTML = datosComprobantes.map( c => c.categoria)
    const usuarioTable = document.createElement("td");
    usuarioTable.innerHTML = datosComprobantes.map( u => u.usuario)

    newComprobante.appendChild(fechaTable);
    newComprobante.appendChild(ingresoTable);
    newComprobante.appendChild(categoriaTable);
    newComprobante.appendChild(usuarioTable);
    bodytable.appendChild(newComprobante);

    if (datosComprobantes.length > 0) {
        alertComprobantes.style.display = "none";
      } else {
        alertComprobantes.style.display = "block";
      }
    
      

}

    const fecha = ingresoFecha.value;    
    const importe = ingresoImporte.value;
    const categoria = ingresoCategoria.value;
    const usuario = seleccionUsuario.value;



