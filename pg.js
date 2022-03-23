const prompt = require("prompt-sync")({ sigint: true });

let lenguaje = "javascript";
let mostrar = '';
if (lenguaje === "javascript") {
    mostrar = 'Estoy aprendiendo';
} else if (lenguaje !== "javascript"){
    mostrar = 'Lo aprendere mas tarde';
}
console.log(mostrar)