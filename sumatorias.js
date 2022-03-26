const prompt = require("prompt-sync")({ sigint: true });

function diezNumeros(valor){
    for(let i = valor ; i<=valor+10 ; i++)
    console.log(i)
}

//diezNumeros(10);

//Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function numerosCincoEnCinco(){
   for(let i=5 ; i<=20 ; i+=3){
    console.log(i)
   }
}
//numerosCincoEnCinco();

//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100;
function sumas (total){
    var total = 0;
    for (var i=1; i<=100; i++) {
        total += i;
        console.log (total);
    }
}
//4) Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
function factorial(numero){
    let resultado = 1;
    for(let i=1 ; i<=numero ; i++){
        resultado *= i;
        console.log(resultado);
}
}
factorial(9)
//5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.
function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    var f = GenerateFibonacci(10);
    console.log(f);