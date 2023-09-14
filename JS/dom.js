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


//DOM SALIDA DATOS DEL USUARIO //
// const fechaTable = document.getElementById ('fechaTable')
// const ingresoTable = document.getElementById ('ingresoTable') 
// const categoriaTable = document.getElementById ('categoriaTable')
// const usuarioTable = document.getElementById ('usuarioTable')
const bodyTable = document.getElementById('bodyTable')
const alertComprobantes = document.getElementById('alertComprobantes')




// REVISAR ESTA FUNCION. AL ACTUALZIAR PAGINA NO VUELVE A TRAER DATOS, DUPLICA EL INGRESO EN CADA LINEA, NO GUARDA ARRAY


let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('comprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
    agregarComprobante ()



formComprobante.addEventListener('submit', (e) => {
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
    const ingresoTable = document.createElement("td");
    const categoriaTable = document.createElement("td");
    const usuarioTable = document.createElement("td");

    const bFechaTable = datosComprobantes.map( f => f.fecha)
    const bIngresoTable = datosComprobantes.map( i => i.importe) 
    const bCategoriaTable = datosComprobantes.map( c => c.categoria)
    const bUsuarioTable = datosComprobantes.map( u => u.usuario)
   
    fechaTable.innerHTML = ''
    ingresoTable.innerHTML = ''
    categoriaTable.innerHTML = ''
    usuarioTable.innerHTML = ''

    fechaTable.innerHTML = bFechaTable
    ingresoTable.innerHTML = bIngresoTable 
    categoriaTable.innerHTML = bCategoriaTable
    usuarioTable.innerHTML = bUsuarioTable


    newComprobante.appendChild(fechaTable);
    newComprobante.appendChild(ingresoTable);
    newComprobante.appendChild(categoriaTable);
    newComprobante.appendChild(usuarioTable);

   
    bodyTable.appendChild(newComprobante);    


    if (datosComprobantes.length > 0) {
        alertComprobantes.style.display = "none";
      } else {
        alertComprobantes.style.display = "block";
      }
    

}




    // const fecha = ingresoFecha.value;    
    // const importe = ingresoImporte.value;
    // const categoria = ingresoCategoria.value;
    // const usuario = seleccionUsuario.value;


console.log(datosComprobantes)
