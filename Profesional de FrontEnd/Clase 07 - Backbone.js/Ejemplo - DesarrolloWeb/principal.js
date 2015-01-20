//creamos la clase del modelo
var Usuario = Backbone.Model.extend({});
//creamos uns instancia de ese modelo
var miUsuario1 = new Usuario({
	nombre: "Erick"
});

//asignamos un valor a la propiedad "url"
miUsuario1.url = "/usuarios";

//guardo este usuario
miUsuario1.save();

//recupero datos de un usuario
miUsuario1.fetch();

/************************************************/

//creo un objeto cualquiera con Javascript, usando notacion JSON
var objeto = {};
//extiendo ese objeto con la clase Backbone.Events, _.extend pertenece a la libreria Underscore.js
_.extend(objeto, Backbone.Events);

objeto.on("mi_primer_evento", function(msg){
	alert("Se ha desencadenado el " + msg);
});

//objeto.on("cambiar:hora cambiar:fecha", ...);

objeto.trigger("mi_primer_evento", "evento que acabamos de crear.");

/************************************************/

//Pasando varias datos a la funcion manejadora
objeto.on("varios_datos", function(dato1, dato2){
	alert("Se produjo el evento 'varios_datos' y he recibido " + dato1 + " y " + dato2);
});

objeto.trigger("varios_datos", "valor1", "valor2");

/************************************************/

//creo un objeto nuevo, al que le cargo algunos datos
var persona = {
	nombre: "Miguel"
};

//extendiendo el objeto para que soporte eventos de Backbone.js
_.extend(persona, Backbone.Events);
//asigno una funcion manejadora a un nuevo evento
persona.on("segundo_evento", function(){
	alert("Manejador de 'segundo_evento'...");
	alert("muestra this.nombre: " + this.nombre);
});
//disparo ese nuevo evento
persona.trigger("segundo_evento");

/************************************************/

//eliminar un manejador de evento del objeto
persona.off("segundo_evento");

/************************************************/

function manejadora(){
	alert("Estoy en la funcion Manejadora");
	alert("muestra this.nombre: " + this.nombre);
}
objeto.on("segundo_evento", manejadora);

//Ahora podemos eliminar esta funcion manejadora con off()
objeto.off("segundo_evento", manejadora);

/************************************************/

//creo un primer objeto
var fiatUno = {
	marca: "Fiat"
}
//extiendo el objeto para que soporte eventos de Backbone.js
_.extend(fiatUno, Backbone.Events);
//creo un segundo objeto
var seatToledo = {
	marca: "Seat"
}
//creo una funcion
function mostrarMarca(){
	alert("La marca del objeto: " + this.marca);
}
//defino un evento sobre el primer objeto, cambiando el contexto de this
fiatUno.on("mievento", mostrarMarca, seatToledo);
//disparo el evento sobre el primer objeto
fiatUno.trigger("mievento");

/************************************************/
//creo la clase pelicula
var Pelicula = Backbone.Model.extend();

//var PackPelicula = Pelicula.extend();
//creo un objeto de la clase pelicula
var pelicula1 = new Pelicula();

//asigno una propiedad de manera habitual con javascript
pelicula1.titulo = "Lo que el viento se llevo";

//asigno una propiedad ahora de manera util para aprovechar Backbonejs
pelicula1.set("titulo", "Alguien volo sobre el nido del cuco");

//muestro ambos datos y veo que son independientes
console.log(pelicula1.titulo);
console.log(pelicula1.get("titulo"));

/************************************************/

var ClassModelo = Backbone.Model.extend({
	dato: "Yeah!!",
	metodo: function(){
		alert("funciona!!");
	}
});

var objClassModelo = new ClassModelo();
alert(objClassModelo);
objClassModelo.metodo();

/************************************************/

var ClassModelo = Backbone.Model.extend({
	propiedadInstancia: "Esta no es la que nos interesa ahora"
	}, {
	propDeClase: "Prop estatica",	
	metodoDeClase: function(){
		alert("Este es un metodo estatico o metodo de clase");
	}
});

ClassModelo.metodoDeClase();
console.log("propiedad de clase: " + ClassModelo.propDeClase);

/************************************************/

//Creo una clase de modelo
var Modelo = Backbone.Model.extend({});
//instancio un objeto de ese modelo
var objModelo = new Modelo({
	dato: "Esto se guardara dentro del modelo"
});

objModelo.get("dato");
objModelo.set("dato", "nuevo valor");

/************************************************/

var MiModulo = Backbone.Model.extend({
	dato: "hola mundo MiModulo",
	holaModelo: function(){
		alert(this.dato);
	}
});

var objMiModelo = new MiModelo();
objMiModelo.holaModelo();

/************************************************/

var MiModelo = Backbone.Model.extend({
	holaModelo: function(){
		alert(this.get("dato"));
	}
});

var objMiModelo = new MiModelo({
	dato: "Hola mundo Backbone"
});
objMiModelo.holaModelo();

/************************************************/

var MiModelo = Backbone.Model.extend({
	dato: "hola mundo MiModelo",
	holaModelo: function(){
		alert(this.dato);
		alert(this.get("dato"));
	}
});

var objMiModelo = new MiModelo({
	dato: "Hola al mundo Backbone!!"
});
objMiModelo.holaModelo();