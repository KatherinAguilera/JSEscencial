var persona = {
    nombre:'Juan',
    edad:'36',
    ocupacion: 'Web developer',
    color: 'negro',
    ciudad: 'Valencia', 
    //Metodos hacen acciones
    caminar: function (){
    	console.log('Estoy Caminando');
    },
    saludar: function(){
    	console.log('Hola mi nombre es: ' +  this.nombre);

    	var funcion = function(){
    		console.log(this.nombre);
    	}.bind(this); // bind permir el uso de this dentro del ambito de la funcion y no genere error
        funcion();
    },
};
persona.saludar();