// clase 19 Transformar un array
/* En esta clase veremos cómo transformar un array. 
El método map() itera sobre los elementos de un array en el orden de inserción y 
devuelve array nuevo con los elementos modificados.*/

var persona1 = {
    nombre: 'fercho Conto',
    edad: 30,
    profesion: 'programador',
    altura: 1.89
}

var persona2 ={
nombre: 'Maye Mena',
edad: 46,
profesion: 'enfermera',
altura: 1.70
}

var persona3 ={
nombre: 'marisa pazo' ,
edad: 44,
profesion: 'camaera',
altura: 1.73
}
var persona4 ={
nombre: 'francisco perez',
edad: 46,
profesion: 'enfermera',
altura: 1.76
}

var persona5 ={
nombre: 'Daniel Lemus',
edad: 15,
profesion: 'Enfermera Superior',
altura: 1.80
}

var persona6={
nombre: 'Camila Mena',
edad: 45,
profesion: 'Ama de Casa',
altura: 1.82
}

/* const pasarAlturaCms = persona =>{
    return{
        ...persona,
        altura: persona.altura *100
    }
} Son dos maneras de escribir lo mismo */

const pasarAlturaCms = persona =>({
    ...persona,
    altura: persona.altura *100
    
})
var personas = [persona1, persona2, persona3, persona4, persona5,persona6]

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)
console.log(persona6)
