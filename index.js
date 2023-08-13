// mensaje bienvenida
alert ("Bienvenido!")
// cantidad de usuarios
const totalParticipantes = parseInt(prompt ("¿Cuantos participantes serán?"))

// registracion de usuarios

for ( let participante = 1; participante <= totalParticipantes; participante++ ){
    const nombreParticipante = prompt("Ingrese participante")
    alert ("Participante N°" + participante + "- Nombre: " + nombreParticipante)
    console.log (nombreParticipante)
}
alert("Carga de participantes completa")

// ingreso de gastos
alert('A continuación podrá ingresar los siguientes conceptos:')
alert('Alojamiento, Traslado, Salidas, Dia e Higiene')

function concepto() {
    const conceptoAsignado = prompt('que categoria')
    console.log(conceptoAsignado)    
}
concepto()

let cantidadDeComprobantes = parseInt(prompt('ingrese la cantidad de comprobantes a cargar'))
while (isNaN(cantidadDeComprobantes)){
    cantidadDeComprobantes = prompt( 'ingrese un monto válido')
}

