
const tableXingresos = document.getElementById ('tableXingresos');
const tableXdestino = document.getElementById('tableXdestino');
const tbodyDestino = tableXdestino.querySelector('tbody');
const tbodyIngresos = tableXingresos.querySelector('tbody');
const btnComprobantes = document.getElementById('btnComprobantes')

// BUSQUEDA POR COMPROBANTE + IMPORTE TOTAL


busquedaCategoria ('Alojamiento');
busquedaCategoria ('Traslado');
busquedaCategoria ('Salidas');
busquedaCategoria ('Dia');
busquedaCategoria ('Higiene');
busquedaCategoria ('Otros');


function busquedaCategoria (cate){
    let total = 0;
    const cateBuscada = datosComprobantes.filter( c => c.categoria === cate);
    const importesCategoria = cateBuscada.map(v => parseFloat(v.importe)) 
    importesCategoria.forEach(p => { total = total + p })
    console.log(cateBuscada)
    console.log(total)   

    // tbodyDestino.innerHTML = '';
    const verQuePasa = document.createElement ("td");
    verQuePasa.innerHTML =`
    <td>${total}</td>
    `;
    tbodyDestinoInner.appendChild(verQuePasa);  
}






// BUSQUEDA POR USUARIO 

// BUSCO LOS USUARIOS CARGADOS
const pruebaUsuario = datosUsuarios.map(n => n.nombre)
// console.log(pruebaUsuario)
// RECORRO TODOS LOS USUARIOS CARGADOS
// INDIVIDUALIZO LOS COMPROBANTES CARGADOS
// SUMO EL IMPORTE CARGADO
for (let i = 0; i < pruebaUsuario.length; i++) {
    const totalPorUsuario = busquedaUsuario(pruebaUsuario[i]) 
    function busquedaUsuario (us){
        let total = 0;
        const usuarioBuscado = datosComprobantes.filter( u => u.usuario === us);
        const importesUsuarios = usuarioBuscado.map(v => parseFloat(v.importe)) 
        importesUsuarios.forEach(p => { total = total + p })
        console.log(pruebaUsuario[i])
        console.log(usuarioBuscado)
        console.log(total) 
    }
}




