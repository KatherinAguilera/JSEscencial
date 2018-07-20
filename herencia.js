//Propiedades propias de Javascript
// hashOWnProperty (verifica si (propiedad esta dentro de un objeto))
/*
var persona = { 
     nombre: "Juan",
};
console.log(persona.hasOwnProperty('apellido'));*/
//No se debe hacer pero es ejemplo de herencia

Object.prototype.saludar = function (){
  console.log('Hola soy ' + this.nombre);
  
};
var jenny = {
    nombre: 'jenny',
    profesion: 'Dev',
    ciudad: 'Madrid',
};
var katherine = {
    nombre: 'katherine',
    profesion: 'arte',
    ciudad: 'Valencia',
};

jenny.saludar();
console.log(jenny.hasOwnProperty('saludar'));
