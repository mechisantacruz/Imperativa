const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre : ");

function puedePasar(nombre) {
    if (nombre == "Cosme Fulanito") {
        return  "false";
    } else return  "true";
}