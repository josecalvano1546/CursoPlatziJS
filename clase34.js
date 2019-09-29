//      Async-await: lo último en asincronismo
/*
Async-await es la manera más simple y clara de realizar tareas asíncronas. 
Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. 
Para poder utilizar esta forma, hay que colocar async antes de la definición de la función,
y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
*/

//De esta manera se obtiene datos de la api SWAPI.
const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={ crossDomain: true }


function obtenerPersonaje(id){
// Ya no va a recibir un callback, si no que retornara una promesa.
return new Promise(function(resolve,reject){
    const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukurl, opts,function(data){
        resolve(data)
    })
    .fail(()=>reject(id))
})}
    
function error(id){
    console.log(`sucedio un error con el id ${id}`)
}

//Cada elemento del array sera un elemento
async function obtenerPersonajes(){
var ids=[1,2,3,4,5,6,7]

var promesas = ids.map(id=> obtenerPersonaje(id))

//wait detiene la ejecucion de la funcion hasta que se hayan cargado todas las promesas
try{
    
    var personajes= await Promise.all(promesas)
    console.log(personajes)

}catch(id){
    error(id)
}

}

obtenerPersonajes()