let profesionales = [
    {
      nombre:"juancito"
      profesion:"programador"	
  };
   {
      nombre:"maria"
      profesion:"comerciante"	
  };
   {
      nombre:"pepito"
      profesion:"docente"	
  }
  ]

//Crear funcion que le agregue un metodo a cada objeto
function agregarMetodo(array){
    for(let i=0; i<array.length;i++){
        array[i].saludo = function(array){
            return ("hola mi nombre es " +this.nombre+" y trabajo de "+this.profesion);
    }
} 
agregarMetodo(profesionales);
console.log (profesionales[0].saludo());
//--------------------------------------------------------------------------------------//

function agregarEdades (array){
    let edades=40
    for(let i=0; i<array.length;i++){
        array[i].edad= edades
    } return array
}

console.log (agregarEdades(profesionales));
//--------------------------------------------------------------------------------------//
