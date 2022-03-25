const prompt = require("prompt-sync")({ sigint: true });

function paracaidas (velocidad,altura) {
    if (velocidad < 1000) {
        return 'se abre';
    } else if (altura>=2000 && altura<=3000){
        return 'se abre';
    }else { return 'no se abre';}
    
}
console.log (paracaidas(3000,6500))