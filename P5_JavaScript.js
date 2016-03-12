/*Pregunta 5 (3 ptos)
Crear la clase (con la función constructora) de teléfono, un teléfono tiene un número asignado que se le pasa a la función constructora, y carácterístcas como marca y color. (1 pto)

Crear un método que se llame marcar que aumente el contador de llamadas en uno. (1 pto)

Crear un arreglo de teléfonos y crear una función reciba un arreglo de teléfonos y que permita devolver otro arreglo con todos los teléfono de una marca. (1 pto)*/

function Telefono(numero){
	this.marca = "apple";
	this.color = "gold";
	this.marcar = function(){
		contador ++; 
	}
}
//Aqui se crean los objetos 
var telefono1 = new Telefono("5534642502");
var telefono2 = new Telefono("8123473210");
//Aqui el arreglo con los telefonos 
var arrTels = [telefono1,telefono2];

var funTel = function(arrTels){
	//if(telefono1.marca == telefono2.marca){ //que si van a ser iguales porque ambos son apple
		return arrTels.map(elemento);
		
	//}

}

