const prompt = require("prompt-sync")({ sigint: true });

/*
let miFrase = prompt("Ingrese una frase : ");
    
console.log("tu frase es: " +miFrase);

//ejercicio 2

let nombre = prompt("Ingrese su nombre : ");
    
console.log("Hola " +nombre +"!");*/

//ejercicio 3

/*
let numero= parseInt(prompt("Ingrese un numero"))
let numero2= parseInt(prompt("Ingrese un segundo numero"))
function suma(numero, numero2) {
    let resultado= numero+ numero2;
    return resultado;
    
    
}
console.log(suma(numero,numero2));

EJERCICIO 4*/

let anioNacimiento = prompt("ingrese su año de nacimiento")

function nacimiento(anioNacimiento) {
    let edad = 2022 - anioNacimiento ;
    return edad;
    
}

console.log("tu edad es: " + nacimiento(anioNacimiento));
