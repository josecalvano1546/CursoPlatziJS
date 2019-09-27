// Cómo funciona el tiempo en JavaScript
/* En principio, cualquier tarea que se haya delegado al navegador a través de un callback, 
deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. 
Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que 
el callback se ejcute en ese tiempo exactamente, sino en cualquier momento a partir de allí, 
sólo cuando la cola de tareas se haya vaciado. */

//console.log('a')
//console.log('b')
//setTimeout(()=>console.log('b'),2000)
//console.log('c')

//Que pasa si cambiamos 2000 por 0
//console.log('a')
//setTimeout(()=>console.log('b'),0)
//console.log('c')
//Lo que sucede es que la respuesta obtenida es a,c,b. 
/* Se entiende esto como: 
 # Primero ejecuta la primer linea impriminedo por pantalla 'a'.
 #  Luego ejecuta la segunda linea, en este caso lo que sucede es que le decimos al navegador, que ejecute
    la funcion setTimeout() en  0s. Lo que hace el navegador es colocarlo en otra cola,
    que es la cola de ejecucion. mientras que js sigue ejecutando el programa normalmente.
    Cuando termina el programa principal, recien ahi podra ejecutar las tareas en la cola 
 #  Luego busca ejecuta la linea 3.
 "Finalmente ejecuta la funcion setTimeout "
 */

setTimeout(()=>console.log('a'),0)
for(var i=0; i<1000000000;i++){
    //Programa muy pesado 2 min
}