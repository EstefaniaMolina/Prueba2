/*Pregunta 4 (2 ptos)
El usuario ingresa n en pantalla, se debe dibujar un cuadradro hueco de largo n.

Ejemplo si el usuario ingreso 6

~~~

*
*
*
*
~~~*/

var n = parseInt(prompt("Dame el tamaño del lado del cuadradro")); 
	for(var i=1; i<n ; i++){
			for(var j=1; j<n; j++){
				if(j==1 || j==n || i==1 || j==n){
					console.log("*");
				}else{
					console.log(" "); 
				}
			}
	}