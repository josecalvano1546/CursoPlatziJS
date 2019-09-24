// clase 16 Condicional múltiple: switch
/* Una ultima estructura de control se llama switch. Switch se utiliza para realizar diferentes 
ciones basadas en múltiples condiciones.

Prompt, muestra un cuadro de mensaje que le pide al usuario que ingrese algúna información.

Break, sirve para que el browser se salte un bucle. 

default para el caso de que no cumple ninguna condicion
*/

var signo = prompt('Cual es tu signo?')
console.log(signo)

switch(signo){
    case 'tauro':
        console.log('cosas de taurinos')
        break
    case 'acuario':
        console.log('cosas de acuarianos')
        break
    case 'piscis':
        console.log('cosas de piscianos')
        break   
    case 'geminis':
    case 'géminis':
        console.log('cosas de geminianos')
        break
    default:
        console.log('Porfavor introduzca un signo valido no seas cabron')
}