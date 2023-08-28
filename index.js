// mensaje bienvenida
function start () {
    alert ('Bienvenido')
}
function completed (){
    alert ('¡Carga completa!')
}


function premium (){
    alert ('Opción disponible para usuarios premium')
}

function seleccCategoria (){
    alert ('Seleciona una catoria:'+ '\n' + 'Alojamiento' + '\n' + 'Traslado' + '\n' + 'Salidas' + '\n' + 'Dia a Dia' + '\n' + 'Higiene')
}
const tiposCategorias = {
    alojamiento : 'Alojamiento',
    traslado: 'Traslado',
    salidas :'Salidas',
    dia : 'Dia a Dia',
    higiene: 'Higiene',
}


function numeroDeParticipantes (){
    cantParticipantes = parseInt(prompt('¿Cuantos participantes serán?'))
    while (isNaN (cantParticipantes)){
      cantParticipantes = parseInt(prompt('Por favor ingrese un valor numerico'))
      return cantParticipantes
  }
}

start ()
numeroDeParticipantes ()
console.log (cantParticipantes)

class ingresoParticipantes {
    constructor(nombre, mail, banco, cbu) {
      this.nombre = nombre
      this.mail = mail
      this.banco = banco
      this.cbu = cbu
    }
}
if (cantParticipantes < 10){
  const datosParticipantes = []
  for (let i = 0; i < cantParticipantes; i++) {
    const nombre = prompt("Ingresar nombre")
    const mail = prompt('Ingrese mail')
    const banco = prompt ('Ingrese Banco')
    const cbu = prompt ('Ingrese CBU')
    completed ()   
    const participante = new ingresoParticipantes(nombre, mail, banco, cbu)
    datosParticipantes.push(participante)
  }
  console.log (datosParticipantes)
  
  
  seleccCategoria ()
  console.log (tiposCategorias)
  const categorias = prompt ('Ingrese categoria')
  let numeroDeComprobantes = parseInt(prompt('Ingrese cantidad de comprobantes a registrar'))
  while (isNaN(numeroDeComprobantes)){
    numeroDeComprobantes = prompt( 'ingrese un monto válido')
}


class ingresoComprobantes {
    constructor (categoria,fecha,importe,abonado){
        this.categoria = categoria
        this.fecha = fecha
        this.importe = importe
        this.abonado = abonado
    }
}
    const datosComprobantes = []
    for (let i = 0; i < numeroDeComprobantes; i++) {
      const categoria = categorias
      const fecha = prompt('Ingrese fecha')
      const importe = parseFloat(prompt ('Ingrese Monto'))
      const abonado = prompt ('¿Quién abono?')
      completed ()
      const comprobante = new ingresoComprobantes(categoria,fecha,importe,abonado)
      datosComprobantes.push(comprobante)
    }
    console.log (datosComprobantes)




let cantidadDeComprobantes = parseInt(prompt('ingrese la cantidad de comprobantes a cargar'))
console.log (cantidadDeComprobantes)




//     for ( let comprobantes = 0; comprobantes<cantidadDeComprobantes; comprobantes++){
//         let comprobantes = parseFloat(prompt('Ingrese monto del comprobante'))
//         console.log (comprobantes)
//         alert('¡Carga exitosa!')
//     }
//     alert ('Muchas gracias')

















}
else {
     premium ()
}





// function concepto() {
//     const conceptoAsignado = parseInt(prompt('Ingrese una categoria'))
//     console.log(conceptoAsignado)    
//     }

// if (totalParticipantes < 10){
//     for ( let participante = 1; participante <= totalParticipantes; participante++ ){
//         const datosParticipantes = [];

//         const nombre = prompt("Ingrese Nombre y Apellido")
//         const mail = promt('Ingrese Mail')
//         const banco = promt('Ingrese Banco')
//         const cbu = prompt ('Ingrese CBU')




//         alert ("Participante N°" + participante + "- Nombre: " + nombreParticipante)
//         console.log (nombreParticipante)
//     }
//     //a utilizar en el futuro para el ingreso
    
//     for (const datos of datosParticipantes) {
//     console.log (datos) 
//     }


//     alert("Carga de participantes completa")

//     // ingreso de gastos
//     alert('A continuación podrá ingresar los siguientes conceptos:')
//     alert('01 - Alojamiento, 02 - Traslado, 03 - Salidas, 04 - Dia, 05 - Higiene')
 
//     concepto()
  



