const prompt = require("prompt-sync")({ sigint: true });

/*
1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().

let miFrase = prompt("Ingrese una frase : ");
    
console.log("tu frase es: " +miFrase);

//2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".

let nombre = prompt("Ingrese su nombre : ");
    
console.log("Hola " +nombre +"!");*/

/*/3) Escribí un programa que le pida al usuario ingresar un número,luego le pida un segundo número, e
imprima en la consola la suma de los dos números que ingresó el usuario.
/*
let numero= parseInt(prompt("Ingrese un numero"))
let numero2= parseInt(prompt("Ingrese un segundo numero"))
function suma(numero, numero2) {
    let resultado= numero+ numero2;
    return resultado;
    
    
}
console.log(suma(numero,numero2));

EJERCICIO 4/* 4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.

let anioNacimiento = prompt("ingrese su año de nacimiento")

function nacimiento(anioNacimiento) {
    let edad = 2022 - anioNacimiento ;
    return edad;
    
}

console.log("tu edad es: " + nacimiento(anioNacimiento));

/*5) Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"

var max = 10; 
var min = 1; 
var numerom = Math.random()*(max-min) + min; 
numerom = parseInt(numerom); 
while(true){
      var usuario = prompt("COLOCA UN NUMERO PARA ADIVINAR EL NUMERO MAGICO");
if(usuario == numerom){
  console.log("HAS GANADO");
  break;
}
else if(usuario == 0){
  break;
}
else if(usuario < numerom){
  console.log("EL NUMERO ES MENOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO" );
}
else if(usuario > numerom){
  console.log("EL NUMERO ES MAYOR QUE EL NUMERO MAGICO, VUELVE A INTENTARLO");
}
}
*/

/* 6) Escribí un programa que imprima los números pares del 0 al 100.
let paresalerta = prompt(`Indica hasta que número quieres ver : `);
let pares = [];
if (paresalerta == null || paresalerta == '') {
  console.log('Debes introducir un valor');
}
for (let i = 0; i < paresalerta; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log (pares);
*/

/*7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];

const array=['Pedro','Pablo','Maria','Juan','Diana'];
for (i=0 ; i<array.length;i++)
console.log (array[i]);
*/

/*8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.

let numero = prompt("Ingrese un numero:  ")
    if (numero>500) {
        calculo = numero*0.18;
        console.log (calculo + '%');
    } else { console.log ('no se puede calcular')}
*/

/*9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.

const arreglo = ['primero','segundo','tercero','cuarto'];
if (3<arreglo.length) {
    console.log (arreglo [3]);
} else {console.log ('-1');}
  */  

/*10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.

let total;
let numero = prompt("Ingrese un número natural:  ");
  if (numero<= 9) {
    total = 10 - numero; 
    console.log ("El número es de una cifra le falta mínimo" + total + "para ser un número de dos cifras");
  } else if (numero <=100) {
    total = 100 - numero;
    console.log ("El número es de dos cifras le falta mínimo " + total + " para ser un número de tres cifras");
  } else { console.log ('numero de tres cifras')}

  */