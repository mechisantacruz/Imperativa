/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
/*
let matriz = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
let suma = 0;
for (let fila = 0; fila < matriz.length; fila++) {
    for (let columna = 0; columna < matriz[fila].length; columna++) {


        suma += matriz[fila][columna];

    }

}

console.log(suma);*/
// Completa la función para que retorne una matriz
// de 10x10

function generarMatriz10por10() {
	return "esto debe ser la matriz";
}

// Completa la función para que retorne una matriz
// de 10x10

var returnedArray = [];
numero = 1
for(var i=0; i<10; i++) {
    returnedArray[i] = new Array(10);
    for (j=0 ; j<10 ; j++){
    returnedArray[i][j] = numero+j
    }
    numero+= j
} 
console.table(returnedArray)