//   clase 15 Estructuras repetitivas: do-while
var contador = 0
//funcion que devueve si llueve o no
const llueve = () => Math.random() < 0.25

do{
 contador += 1  
} while (!llueve())

// RETO 
if(contador === 1){
    console.log(`Llovio ${contador} dia`)
} else {
    console.log(`Llovio ${contador} dias`)
}       