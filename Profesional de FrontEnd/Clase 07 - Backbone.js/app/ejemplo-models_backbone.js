//Define un Modelo
var Song = Backbone.Model.extend({});

//Inicializa un Modelo
var song = new Song({
	name: "Marilyn Monroe",
	author: "Pharrell Williams"
});

//Accede a las propiedades
var name = song.get("name");
song.set({ author: "Pharrell" });

//Convertir a JSON
song.toJSON();