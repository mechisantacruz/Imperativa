const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
    
function calculoEdades(array){
    let nuevoArrayUno = [];
    for(let i= 0 ; i<array.length ; i++){
        if(array[i] < 18){
            nuevoArrayUno.push(array[i]);
        }
    }
    return nuevoArrayUno;
}
//console.log(calculoEdades(edades));

function calculoEdades2(array){
    let nuevoArrayDos =[];
    for(let i= 0 ; i<array.length ; i++){
    if(array[i] == 18){
        nuevoArrayDos.push(array[i])
    }
}
return nuevoArrayDos
}
//console.log(calculoEdades2(edades));

function calculoEdades3(array){
    let nuevoArrayTres =[];
    for(let i= 0 ; i<array.length ; i++){
    if(array[i] > 18){
        nuevoArrayTres.push(array[i])
}
}return nuevoArrayTresedades))
}
console.log(calculoEdades3(edades))
