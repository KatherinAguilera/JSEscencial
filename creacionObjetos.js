//Object create
var BF ={
	titulo: 'Battlefield',
	genero: 'FPS',
	jugar: function(){
		console.log('Estoy jugando a ' + this.titulo);
	}
};
var BF1 = Object.create(BF);
BF1['version'] = 'Battlefield 1';
console.log(BF1);
/*console.log(BF.isPrototypeOf(BF1));
console.log(Object.prototype.isPrototypeOf(BF));*/
///Formas de declarar un Objeto
//Syntax sugar
var objeto1 = {};
var objeto2 = Object.create(Object.prototype);
console.log(Object.prototype.isPrototypeOf(objeto1));
console.log(Object.prototype.isPrototypeOf(objeto2));

//Objeto con New
function COD() {
  this.titulo = 'Call Of Duty',
    this.genero = 'FPS';
  this.jugar = function (){
    console.log('Estoy jugando a ' + this.titulo);
  };
}
var IW = new COD ();
IW ['version'] = 'Infinity war';
console.log(IW);


 