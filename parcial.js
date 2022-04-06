const prompt = require("prompt-sync")({ sigint: true });
//Ejercicio 1//
//1./
//Escribir un objeto literal llamado estudiante que contenga//
//las siguientes propiedades que deberás completar con tus datos//
//a.nombre, b.	apellido, c.camada, d.esParcial (VERDADERO)//
let estudiante = {
    nombre: 'Mercedes',
    apellido:'Santa Cruz',
    camada:'5',
    esParcial:true,
}
//2.  Crear una función que, pasado un número entero (la futura nota), nos devuelva la situación del alumno:
//NOTA < 4 :desaprobado 4 <= NOTA < 7 :debe rendir examen final  NOTA >= 7 :promocionado.
//La función deberá retornar la condición final del alumno (solo retorna la palabra). 
//Al momento de llamar a la función, deberás mostrar la siguiente frase: 
//“El alumno obtuvo una nota igual a [NOTA] por lo tanto su condición es [CONDICIÓN]” 
let resultado = prompt("Ingrese nota : ");

function devuelvenota(){
    let nota = (resultado);
        if (nota > 4 && nota < 7) {
            return("El alumno obtuvo una nota igual a " + nota +  " por lo tanto su condición es debe rendir examen final")
        }else if (nota >= 7) {
            return ("El alumno obtuvo una nota igual a " + nota +  " por lo tanto su condición es promocionado")
        }else {return("El alumno obtuvo una nota igual a " + nota +  " por lo tanto su condición es desaprobado")}
    }
console.log (devuelvenota())
