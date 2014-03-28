var CategoryView = Backbone.View.extend({
	template: Handlebars.compile(
		'<h1>{{category}}</h1>' +
		'<ul>' + 
		'{{#each models}}<li>' +
		'<span class="label label-info">' +
		'{{attributes.category}}</span> ' +
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a></li>{{/each}}' +
		'</ul>'
	),
	render: function () {
		this.$el.html(this.template(this.options));
		return this;
	}
});