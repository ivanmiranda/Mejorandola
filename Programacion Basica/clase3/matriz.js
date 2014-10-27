/*var menu = ["Productos", "Ventas", "Contacto"];
document.write(menu[2]);*/

/*var dofa = [["Fuerza", "Oportunidad"],["Debilidades","Amenazas"]];

document.write(dofa[1][1]);*/

function explosion(){

	alert("Boom!");
	document.write("<h1>Boom, elejiste un area minada :(</h1>");

}

function ganaste(){

	document.write("<h1>Eres un ganador :)</h1>");

}

// 1=Bomba, 0=No hay bomba 
var campo = [[ 1 , 0 , 0 ],
			 [ 0 , 1 , 0 ],
			 [ 1 , 1 , 1 ]];

var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estas en un campo minado\n" + "Elije una posicion entre el 0 y el 2 para X y para Y");

x = prompt("Posicion en X? (entre 0 y 2)");
y = prompt("Posicion en Y? (entre 0 y 2)");

if(x < 3 && y < 3){

	var posicion = campo[x][y];
	document.write("<h1>Elegiste " + textos[posicion] + "</h1>");
	if(posicion == 1){

		explosion();

	}
	else{

		ganaste();

	}


}
else{

	document.write("<h1>Te saliste del campo</h1>");
	explosion();

}