// clase 7 Desestructurar objetos
// En esta clase aprenderemos otra forma de acceder a los atributos de los objetos que es la desestructurización de los mismos.
var persona ={
    nombre: 'jose',
    apellido: 'calvano',
    edad: 28
}

function imprimirMayusculas2(persona) {
   // var nombre = persona.nombre  en lugar de hacer esto, podemos hacer lo siguiente:
   var {nombre} = persona // De esta manera asignamos a la variable 'nombre' lo que tenga el atributo nombre del objeto
    console.log(nombre)
   // Para no duplicar las variables introducir el nombre de la variable como parámetro de la segunda variable. Ej var{nombre} = persona
}
imprimirMayusculas2(persona)

//Desafio 
var persona1={
    nombre: 'juan',
    apellido: 'Alegre',
    edad: 22
}
var persona2={
    nombre: 'Amalia',
    apellido: 'Caceres',
    edad: 29
}

function imprimirNombreYEdad(persona2) {
    var {nombre} = persona2
    var {edad} = persona2
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)

}
imprimirNombreYEdad(persona1)
imprimirNombreYEdad(persona2)