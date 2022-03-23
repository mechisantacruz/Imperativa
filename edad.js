const prompt = require("prompt-sync")({ sigint: true });
let edad = 15;
if (edad > 0 && edad < 18) {
    console.log ("No puede pasar al bar ")
} else if  (edad < 21 && edad > 18 ) {
    console.log ("Puede pasar al bar, pero no puede tomar alcohol")
} else if (edad >21) {
    console.log ("Pude pasar al bar y puede tomar alcohol")
} else if (edad = 21) {
    console.log ("Pude pasar al bar y puede tomar alcohol "+" Felicitaciones por haber llegado a la mayoria de edad")
} else {
    console.log ("Error, edad inválida. Por favor ingrese un número válido")
}
if (edad %2 !==0) {
    console.log ("Sabias que tu edad es impar?")
}