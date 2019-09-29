//                      Callbacks
/*
En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

Un callback es una función que se pasa a otra función como un argumento. 
Esta función se invoca, después, dentro de la función externa para completar alguna acción.
*/

//De esta manera se obtiene datos de la api SWAPI.
const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={ crossDomain: true }
const onRepleace =(luke) => console.log(`Hola soy ${luke.name}`)

function obtenerPersonaje(id){
    const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukurl, opts, onRepleace)
}
/* De esta manera podemos ver como funciona el asincronismo en JS, no podemos saber con 
anticipacion en que orden obtendremos los personajes*/
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)


