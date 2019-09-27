// Funciones como parámetros
/* En JavaScript, los parámetros de funciones son por defecto undefined. 
De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente 
que lo evalúe como verdadero. */
class persona{
    //Constructor de la clase
    constructor(nombre, apellido,altura){
        //Atributos
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    //Metodos de la clase 
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(this.nombre,this.apellido, false)
        }
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
    saludar(fn){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy programador`)
        if(fn){
            fn(this.nombre,this.apellido, true)
        }
    }
    


}

function responderSaludo(nombre,apellido,esdev){
    console.log(`buen dia ${nombre} ${apellido}`)
    if(esdev){
        console.log(`No sabia que eras programador/a`)
    }else{console.log('NO ERES UN MALDITO PROGRAMADOR')}
}


var jose = new desarrollador('jose','calvano',1.9)
var arturo = new persona('arturo','romero',1.4)

jose.saludar(responderSaludo)
arturo.saludar(responderSaludo)
arturo.saludar()