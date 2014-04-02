var ProductPlpView = Backbone.View.extend({

	template: Handlebars.compile(
		'<ul class="row">' + 
		'{{#each models}}<li class="col-xs-12 col-sm-6 col-md-4">' +
		'<a href="#/products/{{attributes.url}}">' +
		'<img src="photos/{{attributes.imagepath}}" width=100 class="img-polaroid" />' +
		'</a><span class="label label-info">' +
		'{{attributes.category}}</span> ' +
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a></li>{{/each}}' +
		'</ul>'
	),
	
	initialize: function  () {
		this.listenTo(this.collection, "reset", this.render);
		this.listenTo(this.collection, "add", this.render);
		this.listenTo(this.collection, "remove", this.render);
	},
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});