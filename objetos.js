//Obejeto Propiedad: valor
var opinion = "Es uno de mis libros favoritos"
var libro = {
	titulo: "IT",
	autor: "Sephen King", 
	genero: "terror",
	valoracion: 9,
	tags: ["Pennywise", "floating", "payaso", "Derry"],
	opinion: opinion,
	"critica general": "Positiva de forma unanime"
	};

console.log(libro.autor);
console.log(libro.tags[2]);
console.log(libro.opinion);
/*Se puede borrar propiedades 
delete(libro.autor);
console.log(libro.autor);*/

//Otra forma de acceder a las propiedades del objeto (Brackets)
//Ejm
console.log(libro["genero"]);

// Acceder al objeto cuando estas propiedades no cumplan con las reglas establecidas
console.log(libro["critica general"])

//Mostrar acceder todas las propiedades del objeto con for

for (var propiedad in libro){
	console.log(propiedad + ' : ' + libro[propiedad]);
} 