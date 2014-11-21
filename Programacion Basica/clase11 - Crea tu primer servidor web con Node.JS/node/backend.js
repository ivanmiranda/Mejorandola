//Teclear 127.0.0.1 para apuntar a uno mismo, mientras corres tambien node backend.js, donde se encuentra el archivo desde CMD
console.log("Arrancando Server de Node");
basededatos = {
	usuario : "freddier",
	password : "mejorandola"
};

var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded());
var servidor;

servidor = web.listen(8080, function (){
	console.log("Servidor Arrancado");
});

web.get("/", function (requerimiento, respuesta){
	respuesta.sendfile("formulario.html");
});

web.post("/entrar", function (requerimiento, respuesta){
	if(requerimiento.body.usuario == basededatos.usuario && requerimiento.body.clave == basededatos.password)
	{
		respuesta.send("Bienvenido al area secreta");
	}
	else
	{
		respuesta.send("Shu!!, fuera de aqui");
	}
	//console.log(requerimiento.body);
	//respuesta.send("Bienvenido al formulario secreto");
});

//Prueba de URLs amigables
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