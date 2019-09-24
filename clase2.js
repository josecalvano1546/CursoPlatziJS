//                     calse 2 Variables:String
// definimos la variable nombre y apellido
var nombre= 'jose' , apellido= 'Calvano'

// Para convertir a mayuscula usamos la funcion toUpperCase()
var nombreEnMayuscula= nombre.toUpperCase()

// Para convertir a minuscula usamos la funcion toLowerCase()
var nombreEnMinuscula= apellido.toLocaleLowerCase()

// Para conocer el caracter en una cierta posiscion charAt(posicion del carater)
// Recordemos que las posiciones de los elementos de un string inician en la posicion 0.
var primeraLetraDelNombre = nombre.charAt(0)

//Para conocer la longitud del string utilizamos el atributo 'length'
var cantidadDeLetrasDelNombre = nombre.length

// concatenar los string utilizamos el simbolo '+'
var nombreCompleto = nombre + ' ' + apellido

/* Otra menera de concatenar strings es utilizando las comillas `comilla invertidas` 
llamadas interpolacion de texto */
var nombreCompleto2 = `${nombre} ${apellido}`

// Dentro de las llaves podemos escribir codigo JS.
var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

/*Podemos acceder a un SUBSTRING dentro de un String utilizando la funcion substr()
Debemos indicar (posicionInicio, CantidadCaracteres) */
var str = nombre.substr(1,2)

// Desafío: Encuentra la última letra de su nombre
var desafio = `${nombre} ${apellido}`
console.log(`La ultima letra de tu nombre es: ${desafio.charAt(desafio.length-1)}`)

//Exitos a todos :)








