// clase 11 Funciones que retornan valores
const MAYORIA_DE_EDAD = 18 // practica recomendable en mayuscula las constantes.
var mayor ={
    nombre:'jose',
    apellido:'calvano',
    edad:23
}
var menor ={
    nombre:'elias',
    apellido:'ziagran',
    edad:15
}
function mayorEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

mayorEdad(mayor)
mayorEdad(menor)

function esMayorDeEdad(persona){
   return persona.edad >= MAYORIA_DE_EDAD
}