//          Promesas
/*
En esta clase veremos las promesas, que son valores que aun no conocemos. 
Las promesas tienen tres estados:
   -pending. (Cuando recien se crea la promera)
   -fullfilled. (.then(valor=>...) Para obtener el valor esperado) 
   -rejected. (.cath(error=>...)Por si sucede algun error)

Soluciona el problema de los callbacks anidados (infireno de los callbacks)

-Como crear una promesa
new Promise(function(resolve,reject){
    ... 
}).then(valor=>{
    ... tratamos el exito
}).cath(error=>{
    ... tratamos el error
})


Si la respuesta es fullfilled  entonces podemos tener un estado intermedio mas 
promise (pending)

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
})
// En el caso de errores
.catch(error)
//Le pasamos el nombre de la funcion que se va a ejecutar.




