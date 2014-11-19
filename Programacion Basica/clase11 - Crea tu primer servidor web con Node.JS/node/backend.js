//Teclear 127.0.0.1 para apuntar a uno mismo, mientras corres tambien node backend.js, donde se encuentra el archivo desde CMD
console.log("Arrancando Server de Node");

var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080, function (){
	console.log("Servidor Arrancado");
});

//Teclear en navegador 127.0.0.1:8080/test?avion=airbus&edad=28
web.get("/test", function (requerimiento, respuesta){
	//Dentro de requerimiento, al irte a console, se ven las variables que se mandaron por GET
	//console.log(requerimiento);
	//respuesta.send("Buen trabajo, lograste un servidor Web");
	respuesta.send("Tu avion es el " + requerimiento.query.avion + " y tu edad es " + requerimiento.query.edad);
});

web.get("/hola/mama-es-linda", function (requerimiento, respuesta){
	respuesta.send("Hola <strong>mama</strong>, estoy triunfando");
});