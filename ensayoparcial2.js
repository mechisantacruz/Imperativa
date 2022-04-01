/*
PRACTICAMOS FOR, ARREGLOS, OBJETOS Y CONDIICIONALES
1) DADO EL SIGUIENTE ARREGLO
*/
/*
DETERMINAR LA SUMA TOTAL DE ELLOS, SOLAMENTE SUMANDO LOS NUMEROS IMPARES
Y GUARDARLO EN UNA VARIABLE QUE SE LLAME RESULTADO. PISTA:
(RECORDA QUE PODEMOS GUARDAD LA EJECUCION DE UNA FUNCION
Y LO QUE RETORNE SERA ASIGNADO A LA VARIABLE)
*/
/*console.log("este es el ejercicio 1")*/

let numeros = [5,9,12,25,6,7,18,1,24,4]
function sumaImpares(array) {
    let suma = 0;
    for (let i=0; i < array.length; i++) {
          if(array[i]%2 != 0){
            suma= suma + array[i];   
        }  
    }
    return suma;  
  }
let resultado = sumaImpares(numeros);
console.log(resultado)

*/
2)DADO EL SIGUIENTE ARREGLO...
*/
const arrayNumeros = [ 7,16,32,27,45,27,51,12,19,21]
/*
CREAR UNO NUEVO EL CUAL CONTENDRA LOS NUMEROS DE ESTE ARREGLO
PERO SOLO LOS NUMEROS QUE SEAN MAYORES QUE 15 Y MENORES O IGUALES QUE 30
*/
console.log ("este es el ejercicio 2")
 
/*
