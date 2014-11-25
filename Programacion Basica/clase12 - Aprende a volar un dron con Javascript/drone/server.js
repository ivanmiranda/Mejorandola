console.log("Iniciando server de Node");

var arDrone = require("ar-drone");

//Express y servidor web
var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080, function(){
	console.log("Servidor arrancado :D");
});

web.get("/", function(requerimiento, respuesta){
	console.log("Home");
	respuesta.sendfile("opciones.html");
});

web.get("/despegar", function(requerimiento, respuesta){
	console.log("Despegando");
	respuesta.sendfile("opciones.html");
});

web.get("/aterrizar", function(requerimiento, respuesta){
	console.log("Aterrizando");
	respuesta.sendfile("opciones.html");
});