const prompt = require("prompt-sync")({ sigint: true });
//Ejercicio 3:
//1. Crear una función que apruebe o desapruebe alumnos en base a su asistencia y a su progreso completo 
//en PlayGround (true, false). Para ello deberán: 
//-	Crear una constante asistenciaMinima que almacene el número mínimo de asistencias permitidas 
//para la aprobación de la materia, en este caso serán 23 asistencias mínimas. 
//-	La función deberá recibir como parámetros la cantidad de asistencias  y la condición final ante 
//PlayGround del alumno.
//-	Un alumno, será aprobado si tiene la cantidad de asistencias mínima y su progreso final está completo. 
//Si alguna de estas opciones no se cumple, el alumno será automáticamente desaprobado. 
//-	Deberá retornar un string aprobado o desaprobado según corresponda

let asistenciaMinima = [23];

function asistencias (numero,playGround){
    
    let resultado= 0;
   if(numero === asistenciaMinima && playGround == true){
       resultado = "aprobado";
   }
   else {
       resultado= "desaprobado";
   }
   return resultado;
}

console.log(asistencias(8,false));