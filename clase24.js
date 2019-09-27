// Clases en JavaScript
/*Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis
 sobre la herencia basada en prototipos de JavaScript.
La palabra clave EXTENDS se usa en declaraciones de clase o expresiones de clase para crear 
una clase que es hija de otra clase.

El método CONSTRUCTOR es un método especial para crear e inicializar un objeto creado a partir 
de una clase.*/

class persona{
    //Constructor de la clase
    constructor(nombre, apellido,altura){
        //Atributos
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //Metodos de la clase 
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        if(this.altura >= 1.8){
            console.log(`${this.nombre} ${this.apellido} es alto`)
        } else {
            console.log(`${this.nombre} ${this.apellido} no es alto`)
        }
    }


}

// Para decir que desarrollador extiende de persona
class desarrollador extends persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        //si queremos que tenga mas atributos ahi si podemos utilizar el this.
        //Obvio solamente seran validos los atributos en esta clase.
    }
    // En este caso redefinimos el metodo saludar para un programador.
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy programador`)
    }

}