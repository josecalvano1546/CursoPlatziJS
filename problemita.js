var jose = {
    nombre: 'Jose',
    apellido: 'Calvano',
    edad: 23,
    niño: null,
    joven: null,
    adulto: null,
    anciano: null
}

var natan = {
    nombre: 'Natan',
    apellido: 'Zigaran',
    edad: 22,
    niño: null,
    joven: null,
    adulto: null,
    anciano: null
}

var fulanito = {
    nombre: 'Fulanito',
    apellido: 'Mengano',
    edad: 10,
    niño: null,
    joven: null,
    adulto: null,
    anciano: null
}

var mirtha = {
    nombre: 'Mirtha',
    apellido: 'Legrand',
    edad: 100,
    niño: null,
    joven: null,
    adulto: null,
    anciano: null
}

var mark = {
    nombre: 'Mark',
    apellido: 'Zuckerberg',
    edad: 35,
    niño: null,
    joven: null,
    adulto: null,
    anciano: null
}

var personas = [jose, natan, fulanito, mirtha, mark]

/* PROBLEMITA A RESOLVER: */

//  Se tiene un array de objetos 'personas', se pide: 
//     --> Realizar una funcion que identifique si una persona es
//         0 < niño < 18 años
//         18 <= joven < 30 años
//         30 <= adulto < 60 años
//         60 <= anciano < 999 años 

//         tal que dicha funcion cambie el parametro que le corresponda 
//         a cada objeto, es decir, si una persona tiene 20 años, el parametro
//         'Joven' pasaria de null ---> true .
var resultado=''

const esNiño=(persona)=>{
    if(persona.edad<18){
      return  resultado= 'niño'
    }
} 
const esJoven=(persona)=>{
    if(persona.edad>=18 && persona.edad<30){
      return  resultado= 'joven'
    }
} 

const esAdulto=(persona)=>{
    if(persona.edad>=30 && persona.edad<60){
      return  resultado= 'adulto'
    }
} 

const esAnciano=(persona)=>{
    if(persona.edad>60){
      return  resultado= 'anciano'
    }
} 



const determinarEdad = (persona) =>{
    esNiño(persona)
    esJoven(persona)
    esAdulto(persona)
    esAnciano(persona)

    switch (resultado){
        case'niño':
            return{
                ...persona,
                niño: true
            }
            break

        case'joven':
            return{
                ...persona,
                joven: true
            }
            break
        case'adulto':
            return{
                ...persona,
                adulto: true
            }
            break
        case'anciano':
            return{
                ...persona,
                anciano: true
            }
            break
        default:
           console.log('Porfavor introduzca un signo valido no seas cabron')
    }
}


var problema = personas.map(determinarEdad)

console.log(problema)