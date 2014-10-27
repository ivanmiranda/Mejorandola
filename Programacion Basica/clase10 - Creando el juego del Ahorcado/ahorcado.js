var palabra = "Tamarindo";
<<<<<<< HEAD
var hombre, l, espacio;
=======
var hombre;
>>>>>>> origin/master

//Declaracion de la clase Ahorcado
var Ahorcado = function(con){

	//this es las variables locales de la clase, accesibes en toda la clase
	//this.contexto es el contexto de dibujo del canvas, que llega por parametro desde la variable 'con'
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
}

Ahorcado.prototype.dibujar = function (){
	
	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();

	dibujo.moveTo(150, 100);
	dibujo.lineTo(150, 50);
	dibujo.lineTo(400, 50);
	dibujo.lineTo(400, 350);
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "#000000";
	dibujo.stroke();

	//Cierra la parte de dibujar
	dibujo.closePath();

	if(this.intentos > 0){
		//intentos = 1 ---> Rostro
		dibujo.beginPath();
		dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "#F00";
		dibujo.lineWidth = 5;
		dibujo.stroke();

		dibujo.closePath();

		if(this.intentos > 1){
			//intentos = 2 --- Torso
			dibujo.beginPath();
			dibujo.moveTo(150, 180);
			dibujo.lineTo(150, 250);
			dibujo.strokeStyle = "#F00";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			if(this.intentos > 2){
				//intentos = 3 --- Brazos
				dibujo.beginPath();
				dibujo.moveTo(120, 220);
				dibujo.lineTo(150, 180);
				dibujo.lineTo(180, 220);
				dibujo.strokeStyle = "#F00";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3){
					//intentos = 4 --- Piernas
					dibujo.beginPath();
					dibujo.moveTo(120, 290);
					dibujo.lineTo(150, 250);
					dibujo.lineTo(180, 290);
					dibujo.strokeStyle = "#F00";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 4){
						//intentos = 5 --- Ojos muertos
						dibujo.beginPath();
						//Ojo izquierdo
						dibujo.moveTo(125, 120);
						dibujo.lineTo(145, 145);
						dibujo.moveTo(145, 120);
						dibujo.lineTo(125, 145);

						//Ojo derecho
						dibujo.moveTo(155, 120);
						dibujo.lineTo(175, 145);
						dibujo.moveTo(175, 120);
						dibujo.lineTo(155, 145);

						dibujo.strokeStyle = "#00F";
						dibujo.lineWidth = 5;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}
		}

	}

}

Ahorcado.prototype.trazar = function(){
	this.intentos++;
	if(this.intentos>=this.maximo){
		this.vivo = false;
	}
	this.dibujar();
}

<<<<<<< HEAD
function iniciar () {

	l = document.getElementById("letra");
	var b = document.getElementById("boton");

	 var canvas = document.getElementById("c");
	 canvas.width = 500;
	 canvas.height = 400;
	 var contexto = canvas.getContext("2d");
	 hombre = new Ahorcado(contexto);

	 //Convierte a mayusculas un texto
	 palabra = palabra.toUpperCase();

	 //Declaro un Array con n espacios de acuerdo al largo de la palabra
	 espacio = new Array(palabra.length);

	 //Agregamos una funcion que se dispare al dar click al boton
	 b.addEventListener("click", agregarLetra);

	 mostrarPista(espacio);

	 // hombre.trazar();
	 // hombre.trazar();
	 // hombre.trazar();
	 // hombre.trazar();
	 // hombre.trazar();
}

function agregarLetra(){

	 var letra = l.value;
	 l.value = "";
	 mostrarPalabra(palabra, hombre, letra);

}

function mostrarPalabra(palabra, ahorcado, letra){
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();

	for(p in palabra){ 

		if(letra == palabra[p]){
			espacio[p] = letra;
			encontrado = true;
		}
	}

	mostrarPista(espacio);

	//Si no lo encontre
	if(!encontrado){
		ahorcado.trazar();
	}

	if(!ahorcado.vivo){
		//Mostrar la palabra entera si estoy muerto
		alert("Estas muerto");
	}

}

function mostrarPista(espacio){
	var pista = document.getElementById("pista");
 	var texto = "";
 	var i;
 	var largo = espacio.length;

 	for(i = 0 ; i < largo ; i++ ){

 		if(espacio[i] != undefined){
 			texto = texto + espacio[i] + " ";	
 		}
 		else{

 			texto += "_ ";
 			
 		}

 		pista.innerText = texto;

 	}


=======
function iniciar () 
{
 var canvas = document.getElementById("c");
 canvas.width = 500;
 canvas.height = 400;
 var contexto = canvas.getContext("2d");
 hombre = new Ahorcado(contexto);
 // hombre.trazar();
 // hombre.trazar();
 // hombre.trazar();
 // hombre.trazar();
 //hombre.trazar();
>>>>>>> origin/master
}