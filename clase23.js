// La verdad oculta sobre las clases en JavaScript
/* Los objetos en JavaScript son “contenedores” dinámicos de propiedades. 
Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad 
de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo 
del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre 
una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.
*/

//De la clases anteriores
function persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    //this hace referencia a ese objeto en la memoria.
}

// Metodos de persona
persona.prototype.saludar = function(){
    console.log(`hola soy ${this.nombre} ${this.apellido}`)
}

persona.prototype.esAlto = function(){
    if(this.altura >= 1.8){
        console.log(`${this.nombre} ${this.apellido} es alto`)
    } else {
        console.log(`${this.nombre} ${this.apellido} no es alto`)
    }
}


// nueva clase
function desarrollador(nombre, apaellido){
    this.nombre = nombre
    this.apaellido = apellido
}

desarrollador.prototype.saludar= function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy programador`)
}

// para realizar una herencia "En la vieja escuela jaja"

function heredaDe(prototipoHijo,prototipoPadre){
// le decimos al prototipo hijo quien sera su prototipo padre
var fn = function() {} //Es como una funcion dummi
fn.prototype = prototipoPadre.prototype
prototipoHijo.prototype = new fn
prototipoHijo.prototype.constructor = prototipoHijo
}




// Llamada a la herencia
heredaDe(desarrollador,persona)

