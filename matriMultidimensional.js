var color = 'rojo';
var matriz = [
    color,
    'Katherine',
    10*3,
    'Katherine ' + color,
    function saludar()
    {
    	alert ('Hola desde funcion');
    },

    ['lunes', 'martes', 'miercoles', 'jueves',
      ['azul', 'verde', 'blanco']
    ]

];
//llamando matriz desde una funciom
matriz[4]();

// llegando a la matriz colores
console.log(matriz[5][4][1]);