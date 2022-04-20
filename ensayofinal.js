// CREAR UN ARRAY DE PERSONAS CON LAS SIGUIENTES PROPIEDADES CADA UNA:
// NOMBRE, APELLIDO, EDAD, PROFESION, cantidadHermanos Y ADEMAS UN METODO QUE NOS RETORNE EL
// NOMBRE COMPLETO DE LA PERSONA

// LUEGO CON UN BUCLE O CICLO INCREMENTAR LA CANTIDAD DE HERMANOS DE CADA PERSONA EN 3 
let personas = [
    {
        nombre: "Daniela",
        apellido: "Marquez",
        edad: 25,
        profesion: "estudiante",
        hermanos: 1,
        },
    {
        nombre: "Nataly",
        apellido: "Pecora",
        edad: 26,
        profesion: "fotografa",
        hermanos: 0,
    },
    {
        nombre: "Raquel",
        apellido: "Spangaro",
        edad: 45,
        profesion: "Tec.Turismo",
        hermanos: 2,
    }
]

function agregarPresentacion(array){
    for(let i=0; i<array.length; i++){
        array[i].presentacion = "Hola, soy " + array[i].nombre + " " + array[i].apellido;
        }
        return array;
    } 

let saludo = agregarPresentacion(personas);
console.log(saludo);

