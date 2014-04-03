App.Views.ProductPlpSingleView = Backbone.View.extend({

	template: Handlebars.compile(
		'<a href="#/products/{{id}}"><img src="photos/{{imagepath}}" width=100 class="img-polaroid" /></a>' +
		'<span class="label label-info">' +
		'{{category}}</span> ' +
		'<a href="#/products/{{id}}">' +
		'{{name}}</a>'
	),
	tagName: 'li',
	className: 'col-xs-12 col-sm-6 col-md-4',
	initialize: function() {
		this.render();
	},   
	
	render: function () {
		var that = this;
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}

});
