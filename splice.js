var matriz = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

//Shift metodo que quita primer item
matriz.shift();

//Pop metodo que quita el item ultimo
matriz.pop();
console.log(matriz);
// 
var viernes = matriz.pop();

console.log(matriz, viernes);
////////Push añadir elemento
var numeros = [1,2,3,4,5];
numeros.push(6);
console.log(numeros)


////////////////////////////// 
/*Splice eliminar y añadir elementos*/
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
//0 añadir elemento / 1 eliminar elemento
dias.splice(0,1);
console.log(dias);

dias.splice(5,0, 'sabado');
console.log(dias);


dias.splice(4,1, 'Domingo');
console.log(dias);