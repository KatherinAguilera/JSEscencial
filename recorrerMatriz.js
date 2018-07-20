//Recorres matriz

var matriz = ['Lunes', 'MArtes', 'Miercoles',
             'Jueves', 'Viernes'];
//Recorrer con For tipico
var longitud = matriz.length,
    i=0;

for(i; i<longitud; i++){
  console.log(matriz[i]);
}

//for each
function mostrarElemen(elementos){
  console.log(elementos)
}
matriz.forEach(mostrarElemen);


//Esnext for .. of (ES6)
for(let elemento of matriz){
  console.log(elemento);
}