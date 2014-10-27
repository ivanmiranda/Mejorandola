
public class Persona{

	public Persona(str n){
		this.nombre = n;
	}

	public void hola (){
		system.println(this.nombre);
	}

}

Persona freddie = new Persona("Freddie");
freddie.hola();

//-----------------------------------------------//
//function Persona(n) es igual a var Persona = function (n)
var Persona = function (n){
	this.nombre = n;
}

Persona.prototype.hola = function (){
	//Aqui se le agrega hola() a la estructura de datos Persona
	alert(this.nombre);
}

var freddie = new Persona("Freddie");
var christian = new Persona("Christian");

freddie.hola();
christian.hola();