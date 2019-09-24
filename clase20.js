// clase 20 Reducir un array a un valor reduce()
var jose = {
    nombre: 'Jose',
    apellido: 'Calvano',
    edad: 23,
    cantidadDeLibros: 22
}

var natan = {
    nombre: 'Natan',
    apellido: 'Zigaran',
    edad: 22,
    cantidadDeLibros: 87
}

var fulanito = {
    nombre: 'Fulanito',
    apellido: 'Mengano',
    edad: 10,
    cantidadDeLibros: 92
}

var mirtha = {
    nombre: 'Mirtha',
    apellido: 'Legrand',
    edad: 100,
    cantidadDeLibros: 16
}

var mark = {
    nombre: 'Mark',
    apellido: 'Zuckerberg',
    edad: 35,
    cantidadDeLibros: 2
}

personas=[jose,natan,fulanito,mirtha,mark]

//Podriamos tener un acumulador dentro de un ciclo for
/* var acumulador = 0
for(var i=0; i < personas.length; i++ ){
    
    acumulador= personas[i].cantidadDeLibros + acumulador
}

console.log(acumulador) */
const reducir=(acumulador,{cantidadDeLibros})=>acumulador+cantidadDeLibros


var totalDeLibros= personas.reduce(reducir,0)

//reduce llama a la funcion acumulada
// El cero lo es el numero en el cual inicia el acumulador

console.log(totalDeLibros)

console.log(personas.slice(3,5))
console.log(personas.splice(3,1))
console.log(personas)
