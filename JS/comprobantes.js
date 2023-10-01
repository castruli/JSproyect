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




// DOM CONTROL 
const tableXingresos = document.getElementById ('tableXingresos');
const tableXdestino = document.getElementById('tableXdestino');
const tbodyDestino = tableXdestino.querySelector('tbody');
const tbodyIngresos = tableXingresos.querySelector('tbody');
const btnComprobantes = document.getElementById('btnComprobantes')
const categorias = ['Alojamiento', 'Traslado','Salidas','Dia','Higiene','Otros',]


//CLASS COMPROBANTES
class ingresoComprobantes {
    constructor (fecha, importe, categoria,usuario){
        this.fecha = fecha
        this.importe = importe
        this.categoria = categoria
        this.usuario = usuario
    }
}

//ALMACENAMIENTO DE COMPROBANTES CARGADOS
let datosComprobantes = []
const jsonComprobantes = localStorage.getItem('comprobantes')
    if (jsonComprobantes){
        datosComprobantes = JSON.parse(jsonComprobantes)
    }
agregarComprobante ()

//FORMULARIO DE CARGA COMPROBANTES 
formComprobante.addEventListener('submit', (e) => {
    e.preventDefault()
    // RESTRICCION CARGA DATOS
    const controlIngresoFecha = ingresoFecha.value;
    const controlIngresoImporte = ingresoImporte.value;
    const controlIngresoCategoria = ingresoCategoria.value;
    const controlSeleccionUsuario = seleccionUsuario.value;
    if (controlIngresoFecha === '', controlIngresoImporte === '', controlIngresoCategoria === '', controlSeleccionUsuario === '') {
        setTimeout(() => {
            Swal.fire({
              text: 'Ingrese campos válidos',
              confirmButtonColor: 'orange',
              textColor: 'white',
              timer:2000,
           })
        },);
    } else {
        if (comprobante.fecha && comprobante.importe && comprobante.categoria && comprobante.usuario) {
        const comprobante = new ingresoComprobantes (ingresoFecha.value, ingresoImporte.value, ingresoCategoria.value, seleccionUsuario.value)
        datosComprobantes.push(comprobante)
        localStorage.setItem('comprobantes', JSON.stringify(datosComprobantes))
        //RESEST IMPUT FORMULARIO
        ingresoFecha.value = '';
        ingresoImporte.value = '';
        ingresoCategoria.value = '';
        seleccionUsuario.value = '';
        tbodyDestino.innerHTML = '';
        tbodyIngresos.innerHTML='';
        //CARGA DE COMPROBANTES + ACTUALIZACION DE TABLAS CONTROL
        agregarComprobante();
        agregarControl ()
        usuariosControl ()   
        } else {
            setTimeout(() => {
                Swal.fire({
                  text: 'No se agregó el comprobante debido a datos incompletos',
                  confirmButtonColor: 'orange',
                  textColor: 'white',
                  timer:2000,
               })
            },);
        }  
    }
})
//FUNCION PARA CARGA DE COMPROBANTES
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


agregarControl ()
usuariosControl ()

// FUNCION AGREGAR COMPROBANTES A SECCION CONTROL

function agregarControl () {
    for (let i = 0; i < categorias.length; i++) {
        busquedaCategoria(categorias[i]);
        function busquedaCategoria (cate){
            let total = 0;
            const cateBuscada = datosComprobantes.filter( c => c.categoria === cate);
            const importesCategoria = cateBuscada.map(v => parseFloat(v.importe)) 
            importesCategoria.forEach(p => { total = total + p })
            const datoCategoria = document.createElement ("td");
            datoCategoria.innerHTML =`
            <td>${total}</td>
            `;
            tbodyDestinoInner.appendChild(datoCategoria);  
        }
    }
}
