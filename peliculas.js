const prompt = require("prompt-sync")({ sigint: true })

function peliculas(valoracion){
        switch (valoracion) {
        case "Muy mala":
            console.log ('Calificaste la película como Muy Mala. Lo lamentamos mucho.');
            break;
         case "Mala":
            console.log ('Calificaste la película como Mala. Lo lamentamos mucho.');
            break;
        case "Mediocre":
            console.log ('Calificaste la película como Mediocre. Lo lamentamos mucho.');
            break;
        case "Buena":
            console.log ('Calificaste la película como Buena. Nos alegra mucho.');
            break;
        case "Muy buena":
            console.log ('Calificaste la película como Muy buena. Nos alegra mucho.');
            break;
        default:
            console.log ('Ingresaste un valor inválido')
            break;
        }
    }
    peliculas ('buena')
    