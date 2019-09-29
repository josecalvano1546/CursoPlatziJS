//          Múltiples promesas en paralelo
/* 
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego 
construimos otro arreglo de Promesas, que pasaremos como parámetro a
Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, 
algo que no es posible usando callbacks.
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

//Cada elemento del arrai sera un elemento
var ids=[1,2,3,4,5,6,7]

var promesas = ids.map((id)=> obtenerPersonaje(id))

Promise
.all(promesas)
.then(personajes => console.log(personajes))
.catch(error)





//     Aca llamamos a la funcion que es una promesa
 //  obtenerPersonaje(1)
  // .then(function (personaje){
  //     console.log(`Hola soy ${personaje.name}`)
 //      Para obtener la siguiente promesa "seria el anidado de los callbacks"
//       return obtenerPersonaje(2)
 //  })
 //  .then(function (personaje2){
 //      console.log(`Hola soy ${personaje2.name}`)
 //  })
 //  En el caso de errores
 //  .catch(error)
 //  Le pasamos el nombre de la funcion que se va a ejecutar.