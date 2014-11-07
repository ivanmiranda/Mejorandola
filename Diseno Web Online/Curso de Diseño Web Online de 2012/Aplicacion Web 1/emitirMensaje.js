var nodo, nom;

function conectar(nom){
	nodo = io.connect("http://mejorando.la:6969");
	nodo.on("notificarMensaje", saludo);
}
function enviarMensaje(){
	nom = $("#cajadetexto").val();
	nodo.emit("mensajeEnviado", nom);
}
function saludo(serverNom){
	$("#conversacion").append("<p>" + serverNom + "</p>");
}