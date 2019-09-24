// clase 10 Condicionales 
// En esta clase empezaremos a trabajar con estructuras de control, éstas nos permiten decidir el flujo de nuestro código
var persona ={
    nombre: 'jose',
    apellido: 'Calvano',
    edad:23,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj:false,
    guitarrista: false,
    dron: false
}

persona2={
    nombre: 'Elias',
    apellido: 'Zigaran',
    edad: 10,
    ingeniero: false
}
function imprimirProfesiones(persona){
    if(persona.ingeniero){
        console.log(`${persona.nombre} es: `)
        console.log(`ingeniero`)
    }else{
        console.log(`no es ingeniero`)
    }
    if(persona.cocinero){
        console.log(`${persona.nombre} es: `)
        console.log(`cocinero`)
    }
    if(persona.cantante){
        console.log(`${persona.nombre} es: `)
        console.log(`cantante`)
    }
    if(persona.dj){
        console.log(`${persona.nombre} es: `)
        console.log(`dj`)
    }
    if(persona.guitarrista){
        console.log(`${persona.nombre} es: `)
        console.log(`guitarrista`)
    }
    if(persona.dron){
        console.log(`${persona.nombre} es: `)
        console.log(`dron`)
    }
}

imprimirProfesiones(persona)

//Desafio: inprimir si es mayor de edad
mayor={
    nombre: 'Elias',
    apellido: 'Zigaran',
    edad: 10,
    ingeniero: false
}
menor={
    nombre: 'Elias',
    apellido: 'Zigaran',
    edad: 10,
    ingeniero: false
}
function mayorEdad(persona){
    if(persona.edad >= 18 ){
        console.log(`${persona.nombre} es mayor de edad y tiene ${persona.edad} años`)
    } else{
        console.log(`${persona.nombre} no es mayor de edad ya que tiene ${persona.edad} años`)
    }
}