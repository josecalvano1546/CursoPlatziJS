/* El contexto de las funciones: quién es this
En esta clase explicamos por qué al introducir el arrow function salió un error. 
El error del contexto de this en javascrip es uno de los errores más comunes.

Recuerda que dentro de la arrow function, this está haciendo referencia al espacio global, a windows.
*/
persona.prototype.saludar = () => {
    console.log(`hola, me llamo ${this.nombre}${this.apellido}`)
    };

// Esto no funciona ya que THIS hace referencia a la variable globar que es WINDOWS


