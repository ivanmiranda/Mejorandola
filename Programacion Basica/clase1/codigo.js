var peso;
var pesoEnMarte;

alert("Quieres saber tu peso en marte?");
peso = prompt("Cual es tu peso en kilogramos?","70");

pesoEnMarte = (peso / 9.81) * 3.711;

alert("Tu peso en marte es: " + (parseInt(pesoEnMarte)) + " Kg");
//alert es una funcion
//alert("Hola mamá, ya sé programar!!!");
//var nombre = "Juan Carlos";
//var apellido = "Flores Gonzalez";
//var edad = 28;
//alert(nombre + " " + apellido + "\n" + edad + " anos.");