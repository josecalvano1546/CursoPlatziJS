//                              clase 3 Variables: Numeros
var edad = 23
// Incrementar en 1 el valor de la variable 
edad = edad + 1

// Otra manera
edad += 1

//Decrementar en 1 el valor de la variable 
var peso = 70

//Otra manera
peso -= 1

// suma(+)
var hamburguesa= 5
peso = peso + hamburguesa
// o tambien
peso += hamburguesa

// restar(-)
var deporte = 3
peso = peso - deporte
//o tambien
peso -= deporte

//Numero con decimales 
var precioVino = 200.3

//Supongamos que queremos 3 vinos. 
var total = precioVino * 3 //El resultado de esto en el navegador es 600.9000000000001 
//Dependiendo de las necesidades lo podemos, podemos solucionarlo de la siguiente manera:
total = precioVino *100 *3/100 //El resultado es 600.9

/* Que sucede cuando no conocemos la cantidad de decimales, 
entonces debemos acceder al modulo de matematicas de JS */
total = Math.round(precioVino*3*100)/100
// Si queremos ahora una cierta cantidad de decimales utilizamos la funcion toFixed(long)

var longitud = total.toFixed(2) // El resultado es un string "600.90"
// Para convertirlo a numero nuevamente utilizamos la funcion parseFloat('string')
var denuevo = parseFloat(longitud)

//Division
var personas = 2
var pizza = 8
var pizzaPorPersonas = pizza / personas

/*          ANOTACION IMPORTANTE:
Recerda que en operaciones con decimales debemos realizar operaciones adicionales para 
conseguir un resultado preciso. Ej. var total = ( precioDeVino * 100 * 3) / 100
Para redondear una operación se utiliza la función: Math.round */





