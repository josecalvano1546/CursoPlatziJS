// clase 13 Estructuras repetitivas: for
var persona ={
    nombre: 'jose',
    apellido: 'Calvano',
    edad: 23,
    peso: 75
}

const CAMBIO_PESO = 0.200
const DIAS_AÑO = 365

console.log(`Al comienzo del año ${persona.nombre} pesa ${persona.peso}Kg`)
//Simulamos el proceso del año

const aumentarPeso = (persona,incremento) => persona.peso += incremento

const decrementarPeso = (persona, decremento) => persona.peso -= decremento


//Parametros del for(variable ; condicion de fin ; incremento)
for(var i = 1; i<=DIAS_AÑO; i++ ) {
    var random = Math.random()
    if(random <= 0.25){
            aumentarPeso(persona,CAMBIO_PESO)
    } else if(random <= 0.50){
            decrementarPeso(persona,CAMBIO_PESO)
    }
}

console.log(`Al final del año ${persona.nombre} pesa ${persona.peso.toFixed(2)}Kg`)

console.log(typeof persona.peso) 