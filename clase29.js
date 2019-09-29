//          Manejando el Orden y el Asincronismo en JavaScript
/*
Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas 
es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que 
el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta 
manera generamos una situación poco deseada llamada CallbackHell.
*/

//De esta manera se obtiene datos de la api SWAPI.
const API_URL='https://swapi.co/api/'
const PEOPLE_URL='people/:id'

const opts={ crossDomain: true }


function obtenerPersonaje(id,callback){
    const lukurl=`${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukurl, opts, function onRepleace (luke) {
        console.log(`Hola soy ${luke.name}`)
// Aca adentroooooooo
        if(callback){
            callback()
        }
    })
    
}
/* Si queremos que las llamadas al servidor se ejecuten en orden debemos utilizar
callbacks */
// CallbackHell: lista anidada de funciones
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})

