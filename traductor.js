const prompt = require("prompt-sync")({ sigint: true })

function traductorcondicial(traduccion){
        switch (traduccion) {
        case "casa":
            console.log ('house');
            break;
         case "perro":
            console.log ('dog');
            break;
        case "pelota":
            console.log ('ball');
            break;
        case "arbol":
            console.log ('tree');
            break;
        case "genio":
            console.log ('genius');
            break;
        default:
            console.log ('palabra incorrecta')
            break;
        }
    }
    traductorcondicial ('no')
    
