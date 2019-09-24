// clase 21 Cómo funcionan las clases en JavaScript
/* Las clases son funciones cuya sintaxis tiene dos componentes:

expresiones
declaraciones
En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

Reto: agrega el atributo altura y la función soyAlto.
*/

function persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //this hace referencia a ese objeto en la memoria.
}
persona.prototype.saludar = function(){
    console.log(`hola soy ${this.nombre} ${this.apellido}`)
}
//              DESAFIO
// agregar la altura de la persona
//Agregar la funcionalidad si la persona es no alta.
persona.prototype.esAlto = function(){
    if(this.altura >= 1.8){
        console.log(`${this.nombre} ${this.apellido} es alto`)
    } else {
        console.log(`${this.nombre} ${this.apellido} no es alto`)
    }
}


var jose = new persona('jose','calvano', 1.8)
var elias = new persona('elias', 'ziga', 1.6 )

jose.saludar()
jose.esAlto()
elias.esAlto()

