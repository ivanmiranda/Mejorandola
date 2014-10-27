//DOCUMENT OBJECT MODEL
document.write("<h1>Hola mamá!</h1>"); 
var maxima = Math.max(5,23,3,5,9,450,564);
document.write(maxima);

function mostrar(pos){

	document.write(pos.coords.latitud + "," + pos.coords.longitude);

}
navigator.geolocation.getCurrentPosition( mostrar );