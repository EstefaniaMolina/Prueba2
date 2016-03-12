/*Pregunta 1 (1pto)
Crear una función que tome los números de un arreglo entregado como parámetro y devuelva la suma de los elementos.

Probar con [1,2,3,4,5,6], el resultado debería ser 21, pero debe funcionar cualquier arreglo, si uno de los elementos no es un número deber ser ignorado.*/

var arr = [1,2,3,4,5,6];

var suma = function(primero, segundo){
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == 'number'){
	return primero + segundo; 
		} 
	}
}

var respuesta = arr.reduce(suma,0); 
console.log(respuesta); 
