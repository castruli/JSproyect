// BUSQUEDA POR COMPROBANTE
const cate = ''
function busquedaCategoria (cate){
    const cateBuscada = datosComprobantes.filter( c => c.categoria === cate);
    console.log(cateBuscada)
}
busquedaCategoria ('Alojamiento');
busquedaCategoria ('Traslado');
busquedaCategoria ('Higiene');
busquedaCategoria ('Dia');
busquedaCategoria ('Salidas');
busquedaCategoria ('Otros');