var Song = Backbone.View.extend({

	tagName: "li",
	className: "item border-bottom",
	template: Handlebars.compile($("#song-template").html()),
	initialize: function(){
		this.listenTo(this.model).on("change", this.render, this);
	},

	render: function(){
		var song = this.model.JSON();
		var html = this.template(song);
		this.$el.html(html);
		return this;
	}

});

var SongView = Backbone.View.extend({});

var view = new SongView();

view.el;

var SongView = Backbone.View.extend({
	tagName: 'li'
});

var view = new SongView();

view.el;

var SongView = Backbone.View.extend({
	tagName: 'li',
	className: "item border-bottom",
	id: 'song1'
});

var view = new SongView();

view.el;

song;

var view = new SongView({ model: song });

view.el;

view.render();