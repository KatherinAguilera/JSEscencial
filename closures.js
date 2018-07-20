//Ejem 1
function funcion1(){
  var miVariable = 1;
  
  function funcionInterna(){
    console.log(miVariable);
  }
  return funcionInterna;
}

var variableExterna = funcion1();
//console.log(variableExterna);
variableExterna();

//ejem2

function funcion2(){
  var miVariable = 2;
  
  function funcionInterna(){
    console.log(miVariable);
  }
  
  funcionExterna(funcionInterna);
}
function funcionExterna(funcion){
  funcion();
}
  funcion2();

//ejem 3 
function espera(mensaje){
  setTimeout(function(){
    console.log(mensaje);
  }, 2000)
}
espera("Hola tu.....")

