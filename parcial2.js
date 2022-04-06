const prompt = require("prompt-sync")({ sigint: true });
//Ejercicio 2//
//1.Crea 1 array llamado clase.  
//2.	Crea 3 objetos literales con las propiedades nombres, apellidos y bimestre de 3 compañeros. 
//a.	Agrega estos 3 objetos al array llamado clase.
//b.	Imprimir el array para ver que contenga esos objetos.
//3.	Crea una función que reciba el array clase como parámetro e incremente en 1 el número de bimestre 
//de cada uno de los alumnos, llámala siguienteCursada. Debes utilizar una estructura de repetición. 
//4.	Deberás hacer el correcto llamado de la función mostrando el array clase antes y 
//después de llamar a siguienteCursada. 


let clase = []
const compañeros = [
{ 
    nombre: 'Viviana',
    apellido:'Belloso',
    bimestre:'1'
},
{ 
    nombre: 'Ximena',
    apellido:'Largo',
    bimestre:'1'
},
{ 
    nombre: 'Daniela',
    apellido:'Marquez',
    bimestre:'1'
}
]
clase.push ({ 
    nombre: 'Viviana',
    apellido:'Belloso',
    bimestre:'1'
},
{ 
    nombre: 'Ximena',
    apellido:'Largo',
    bimestre:'1'
},
{ 
    nombre: 'Daniela',
    apellido:'Marquez',
    bimestre:'1'
})

function siguienteCursada (clase){
    for (let i = 0 ; i< array.length ; i++){
    array[i].bimestre = array[i].bimestre + 1
    }
    return clase;
}
console.log (siguienteCursada)