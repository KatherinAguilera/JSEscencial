function saludar()
{
  console.log("Hola Katherine");
}

saludar();


//presentacion nombre funcion 
//nombre y profesion parametros

function presentacion(nombre, profesion){
 alert('Hola me llamo: ' + nombre + ' y soy ' + profesion);
}

presentacion('Winny', 'Perrito');
presentacion('Pedro', 'Odontologo');
presentacion('Yusuke', 'Luchador');

/******************************************/

function mayus(texto){
  
 return (texto.toUpperCase());

}
 var nombre = mayus('Winny');
console.log(nombre);
