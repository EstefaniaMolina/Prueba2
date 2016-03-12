/*Pregunta 2 (1 pto)
Se ha creado el siguiente algoritmo que busca que el usuario ingrese elementos hasta que se canse, para lo cual ingresará la palabra fin, este algoritmo no está funcionando, se pide arreglarlo.

~~~javascript var suma = 0; do var ingreso = prompt("ingresa un número"); while (ingreso != "fin"); console.log(suma) ~~~

Hint: ocupar isNaN()*/

var suma = 0;
do{
	var ingreso = prompt("ingresa un numero");
	if(isNaN(ingreso)==false){
		ingreso = parseInt(ingreso); 
		suma = suma + ingreso;
	}
} while(ingreso!="fin"); 

console.log(suma); 

