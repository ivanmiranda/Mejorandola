console.log("Iniciando server de Node");

//Drone Control Code
var arDrone = require("ar-drone");
var drondinez = arDrone.createClient();

function bateria()
{
	console.log("Bateria: " + drondinez.battery());
}

function despegar_drone()
{
	drondinez.config("control:altitude_mac", 100000);
	drondinez.takeoff();
	rotar_drone();
}

function rotar_drone()
{
	drondinez.stop();
	drondinez.calibrate(0);
}

function aterrizar_drone()
{
	drondinez.stop();
	drondinez.land();
}

//Express y servidor web
var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080, function(){
	console.log("Servidor arrancado :D");
});

web.get("/", function(requerimiento, respuesta){
	console.log("Home");
	bateria();
	respuesta.sendfile("opciones.html");
});

web.get("/despegar", function(requerimiento, respuesta){
	console.log("Despegando");
	bateria();
	despegar_drone();
	respuesta.sendfile("opciones.html");
});

web.get("/aterrizar", function(requerimiento, respuesta){
	console.log("Aterrizando");
	aterrizar_drone();
	bateria();
	respuesta.sendfile("opciones.html");
});