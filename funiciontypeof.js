//typeof funcion que permite saber de que tipo es una variable o dato

var arraynum= [1, 2, 3, 4, 5];
console.log(typeof arraynum);

console.log(typeof true);

var numero= 8;
console.log(typeof numero);


var nombre = "pedro";

console.log(typeof nombre);

//bug de javascript

console.log(typeof null);

/*****************************************************************************/

var conversion= "10";
if(typeof conversion === "string")
{
  console.log("Ok");  
}
else{
  
  console.log("Error " + typeof conversion); 
}
  
  
  
  