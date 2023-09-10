
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
    alert ('Seleciona una catoria:'+ '\n' + 'Alojamiento' + '\n' + 'Traslado' + '\n' + 'Salidas' + '\n' + 'Dia a Dia' + '\n' + 'Higiene' + '\n' + 'Otro')
}
const tiposCategorias = {
    alojamiento : 'Alojamiento',
    traslado: 'Traslado',
    salidas :'Salidas',
    dia : 'Dia a Dia',
    higiene: 'Higiene',
    otro: 'Otro'
}
//agregar al seleccionar otro msj de premium

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

    let totalImporte = 0;
    const importesCategoria = datosComprobantes.map(v => v.importe) 

    for (const i of importesCategoria) { 
    totalImporte = totalImporte + i 
    }
    console.log(totalImporte)

    alert ('El total ingresado es de $' + ' ' + totalImporte + ' en la categoria' + ' ' + categorias)
}
else {
     premium ()
}



