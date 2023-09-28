// BUSQUEDA POR COMPROBANTE + IMPORTE TOTAL

function busquedaCategoria (cate){
    let total = 0;
    const cateBuscada = datosComprobantes.filter( c => c.categoria === cate);
    const importesCategoria = cateBuscada.map(v => parseFloat(v.importe)) 
    importesCategoria.forEach(p => { total = total + p })
    console.log(cateBuscada)
    console.log(total)   
}


busquedaCategoria ('Alojamiento');
busquedaCategoria ('Traslado');
busquedaCategoria ('Higiene');
busquedaCategoria ('Dia');
busquedaCategoria ('Salidas');
busquedaCategoria ('Otros');

// BUSQUEDA POR USUARIO 




// crear for of o simil que me permita iterar con todos los posibles usuarios que
// haya y calcular el total pagado por cada uno de ellos 
function busquedaUsuario (us){
    let total = 0;
    const usuarioBuscado = datosComprobantes.filter( u => u.usuario === us);
    const importesUsuarios = usuarioBuscado.map(v => parseFloat(v.importe)) 
    importesUsuarios.forEach(p => { total = total + p })
    console.log(total)   
    console.log(usuarioBuscado)
}

busquedaUsuario('Facundo')
