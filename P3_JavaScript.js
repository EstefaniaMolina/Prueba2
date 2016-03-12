/*Pregunta 3 (1 ptos)
Se pide una función que recibe un arreglo como parámetro y devuelva una copia del arreglo.

Probar con un ejemplo sencillo que funcione.*/

var colores = ['azul','rosa','amarillo'];


var copiaColores = colores.map(function(elemento){
	return elemento; 

	});
console.log(copiaColores);
 

