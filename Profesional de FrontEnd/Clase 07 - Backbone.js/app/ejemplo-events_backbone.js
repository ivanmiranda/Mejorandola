var Song = Backbone.Model.extend({});

var song = new Song({ name: "Fade to black", author: "Metallica" });

song.toJSON();

song.on("play", function (){console.log("Reproduciendo...")});

song.trigger("play");

song.off("play");

song.on("change", function (){console.log("He cambiado...");});

song.toJSON();

song.set({author: "Metallica"});

song.set({author: "Metallica rules"});

song.off("change");

song.on("change:author", function(){console.log("Author fue cambiado...")});

song.toJSON();

song.set({name: "One"});

song.toJSON();

song.set({author: "Bettles"});

song.set({author: "Metallica"});

//Escuchar un evento
song.on("event-name", doSomething);

//Disparador de un evento
song.trigger("event-name");

//Eventos de modelos
song.on("change:name", doSomething);