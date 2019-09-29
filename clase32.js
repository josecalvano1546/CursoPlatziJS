// Promesas Encadenadas

/*
A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro
de otros, cuando se usan Promesas la ejecución de las llamadas no se hacen de manera anidada 
sino de manera encadenada, al mismo nivel una debajo de la otra, lo que hace que el código sea
mucho más legible y mantenible.
*/
// Volviendo al ejemplo anterior

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
// Aca llamamos a la funcion que es una promesa
obtenerPersonaje(1)
.then(function (personaje){
    console.log(`Hola soy ${personaje.name}`)
    // Para obtener la siguiente promesa "seria el anidado de los callbacks"
    return obtenerPersonaje(2)
})
.then(function (personaje2){
    console.log(`Hola soy ${personaje2.name}`)
})
// En el caso de errores
.catch(error)
//Le pasamos el nombre de la funcion que se va a ejecutar.