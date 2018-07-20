

var colores = ['rojo', 'verde', 'blanco', 'azul'];
console.log(colores);
function borraElemMatriz(elemento, matriz){
	var indice = matriz.indexOf(elemento);
	if(indice > -1){
		//El elemnto Si existe
		matriz.splice(indice, 1);
	}
	else{
		//El elemnto no exizte
		alert('No se ha encontrado el elemnto');
	}
}
borraElemMatriz('rojo', colores);
console.log(colores);

//Si existe elemento arroja 1 sino arroja -1
var number= [1,2,3,4,5,6];

console.log(number.indexOf(2));