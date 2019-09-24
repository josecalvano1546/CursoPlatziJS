// clase 12 Arrow functions
/*En esta clase aprenderemos a utilizar Arrow Functions que permiten una nomenclatura 
más corta para escribir expresiones de funciones. Este tipo de funciones deben definirse 
antes de ser utilizadas.
Al escribir las Arrow Functions no es necesario escribir la palabra function, 
la palabra return, ni las llaves. */
persona ={
    nombre:'jose',
    edad:18
}
const MAYORIA_EDAD = 18
//JS nos permite asignar a una variable una funcion.
/* var mayorEdad = function (persona){
    return console.log('Esto tambien es valido')
} 
mayorEdad(persona) 
A esto se lo denomina funcion anonima, y es invocada mediante el nombre de la variable.
*/

//              Arrow functions
// var mayorEdad = persona => console.log('Esto tambien es valido')
// Si tenemos un solo PARAMETRO podemos obviar los (). 
// Si la funcion solo retorna algo, podemos no escribir el RETURN ni {}. 
// Notese que lo que escribiamos en 3 lineas ahora puede ser escrita en 1.


//Si queremos DESESTRUCTURAR el parametro tenemos que poner ()
//DESAFIO
const mayorEdad = ({edad}) => edad >= MAYORIA_EDAD

const permitirAcceso = persona => {
    if(!mayorEdad(persona)){
         console.log('ACCESO DENEGADO')
    } else{ console.log('es mayor') }
}

permitirAcceso(persona) 