function saludar(nombre)
{
  
  return 'Hola mi nombre es ' + nombre
}
document.write(saludar('Kathy'));


/***********************************/
function total(){
var numero = 2;
var numero2= 3;

return  (numero+numero2);
}
console.log(total());

/********************************/
function pixeles(alto, ancho){
  if(alto>1 && ancho>1)
    {
      return alto * ancho;
    }
else {
     return 0;
  }
}
alert('El resultado es: ' + pixeles(prompt('Digite ancho'), prompt('Digite alto')));
/************************************************/
/*function cuadrados(a, b)
{
  var cuadradoA = a*a;
  var cuadradroB =b*b;
  var sumacuadrado = cuadradoA + cuadradroB;
  return sumacuadrado;
}
console.log('El resultado es: '+ cuadrados(prompt('Digite num1'), prompt('Digite num2')));

/************************************/
/*Funcion igual a la anterior pero simplificada con return*/
function cuadrado(a,b){
  return a*a + b*b;
}
console.log('El resultado es: '+ cuadrado(prompt('Digite num1'), prompt('Digite num2')));
