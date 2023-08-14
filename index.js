// mensaje bienvenida
alert ("Bienvenido!")
// cantidad de usuarios
let totalParticipantes = parseInt(prompt ("¿Cuantos participantes serán?"))
while (isNaN (totalParticipantes)){
    totalParticipantes = parseInt(prompt('Por favor ingrese un valor numerico'))
}
console.log (totalParticipantes)
// registracion de usuarios

function concepto() {
    const conceptoAsignado = parseInt(prompt('Ingrese una categoria'))
    console.log(conceptoAsignado)    
    }

if (totalParticipantes < 10){
    for ( let participante = 1; participante <= totalParticipantes; participante++ ){
        const nombreParticipante = prompt("Ingrese Nombre y Apellido")
        alert ("Participante N°" + participante + "- Nombre: " + nombreParticipante)
        console.log (nombreParticipante)
    }
    alert("Carga de participantes completa")

    // ingreso de gastos
    alert('A continuación podrá ingresar los siguientes conceptos:')
    alert('01 - Alojamiento, 02 - Traslado, 03 - Salidas, 04 - Dia, 05 - Higiene')
 
    concepto()
  
    let cantidadDeComprobantes = parseInt(prompt('ingrese la cantidad de comprobantes a cargar'))
    console.log (cantidadDeComprobantes)
    while (isNaN(cantidadDeComprobantes)){
        cantidadDeComprobantes = prompt( 'ingrese un monto válido')
    }
    for ( let comprobantes = 0; comprobantes<cantidadDeComprobantes; comprobantes++){
        let comprobantes = parseFloat(prompt('Ingrese monto del comprobante'))
        console.log (comprobantes)
        alert('¡Carga exitosa!')
    }
    alert ('Muchas gracias')
} else {
    alert('Deberas utilizar la versión premium')
}



