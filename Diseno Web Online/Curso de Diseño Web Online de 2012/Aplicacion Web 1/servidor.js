//Correr esto con Nodejs y Javascript, falta poner un html con una caja de texto y un boton de enviar
var servidor = require("socket.io").listen(6969);

servidor.sockets.on("connections", inicio);

function inicio (socket){
	socket.on("mensajeEnviado", emitir);
}
function emitir(nomnomnom){
	servidor.sockets.emit("notificarMensaje", nomnomnom);
}