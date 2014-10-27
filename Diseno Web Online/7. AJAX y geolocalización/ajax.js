$(function(){

/* Esto es lo mismo que la funcion debajo, pero mas simplificado
	$.get('logos_footer.html', function(codiguito){
		console.log(codiguito);
		$('footer').append(codiguito);
	});
*/
// Esta funcion hace lo mismo de arriba, pero reemplaza todo lo 
// que esta dentro del footer, por eso se crea un div llamado logos
// Lo que se encuentra al lado de logos_footer.html es para especificar
// que solamente se quiere cargar un logo
	$('footer .logos').load('logos_footer.html #maestrosdelweb');

	$.get('usuario.json', function(info){
		var avatar   = new Image();
		avatar.src   = info.avatar;
		avatar.title = info.nombre+ ' ' +info.apellido;

		$('#avatar').append(avatar);
	});

});

var base_url = "http://query.yahooapis.com/v1/public/yql?"

function obtenerGeoInformacion(lat, lon){
 	//Solo para provar que sirve la funcion, imprime latitud y longitud 
 	//console.log(lat, lon);
 	
 	var query = 'SELECT * FROM geo.placefinder WHERE text="'+lat+ ', '+lon+'" AND gflags="R"';

 	query = encodeURIComponent(query);
	
	//console.log(query);
 	
	$.ajax({
		url : base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback : 'procesarGeoInfo',
		data : {
			format : 'json'
		}
	});

}

function procesarGeoInfo(datos){
	//console.log(datos);
	var resultado = datos.query.results.Result;
	var barrio    = resultado.neighborhood;
	var ciudad    = resultado.city;
	var pais      = resultado.country;
	var woeid     = resultado.woeid;

	$('#geo').prepend('<p><strong>'+barrio+'</strong><br>'+ciudad+', '+pais+'</p>'); 

	obtenerClima(woeid);

}

function obtenerClima(woeid){
 	//Solo para provar que sirve la funcion, imprime latitud y longitud 
 	//console.log(lat, lon);
 	
 	var query = 'SELECT * FROM weather.forecast WHERE woeid="'+woeid+'" and u="c"';

 	query = encodeURIComponent(query);
	
	//console.log(query);
 	
	$.ajax({
		url : base_url+"q="+query,
		dataType : 'jsonp',
		jsonpCallback : 'procesarClima',
		data : {
			format : 'json'
		}
	});

}

function procesarClima(datos){
	//console.log(datos);
	var clima = datos.query.results.channel;
	var temp = clima.item.condition.temp;
	var unit = clima.units.temperature;
	var code = clima.item.condition.code;
	var img = new Image();
	img.src = "http://l.ying.com/a/i/us/we/52/"+code+".gif"

	console.log(clima);

	$('#clima')
		.append(img)
		.append(temp+' '+unit+'º');
	//Toda la informacion del clima
	//$('#clima').append(clima.item.description);

}