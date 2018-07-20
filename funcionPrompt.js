//funcion .trim() funciona para quitar el o los espacio en blanco antes
//o al final.

var usuario= prompt('Digite su nombre');

if(usuario && usuario.trim()){
  var confirmar= confirm("Es correcto " + usuario +" el nombre?");
    if(confirmar)
      {
        alert('Usuario correcto');
      }else{
        alert('Usuario incorrecto');
      }
}
else{
  alert("No ha introducido nada");
}