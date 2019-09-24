//              Clase 6 = OBJETOS  
/* Los objetos reunen ciertas caracteristicas en comun (atributos) de un objeto de la vida real*/
var jose ={ // Los objetos se definen delimitados mediante llaves {}
    nombre: 'jose',
    apellido: 'calvano', //clave: Valor
    edad: 28
    /* Un atributo se compone de una clave (key) y un valor (value), que se separan entre sí 
    por dos puntos “”:"". Los valores pueden ser de tipo string, número, booleano, etc. 
    Cada atributo está separado del siguiente por una coma. Un objeto puede tener todos 
    los atributos que sean necesarios.*/
}
function imprimirMayusculas(nombre) {
 nombre = nombre.toUpperCase()
 console.log(nombre)
}
imprimirMayusculas(jose.nombre)
/*Escribir el nombre de un objeto separado por un punto del nombre de un atributo, 
nos permite acceder al valor de dicho atributo para ese objeto.*/
//Mejorando un poco 

var persona ={
    nombre : 'jose',
    apellido : 'calvano',
    edad : 23
}
imprimirMayusculas(persona.apellido)

//un objeto también se puede pasar como atributo en una función.
function imprimirMayusculas2(nombre) {
    nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirMayusculas2(persona)

//Las últimas versiones de JavaScript nos permiten desglosar el objeto para acceder únicamente al atributo que nos interesa. Esto se consigue encerrando el nombre del atributo entre llaves { }.
function imprimirMayusculas3({nombre}) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
imprimirMayusculas3(persona)

//Podemos definir a demas un objeto de la siguiente manera
imprimirMayusculas3({nombre:'juan'})