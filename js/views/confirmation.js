var ConfirmationView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Confirmation</h1>' +
		'<p>Order has been placed. Basket emptied</p>' +
		'<ul>' + 
		'{{#each models}}<li>' +		
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a> ' +
		'<span class="label label-info">' +
		'{{attributes.price}}&pound;</span> ' +
		'</li>{{/each}}' +
		'</ul>'
	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		this.collection.reset();
		return this;
	}

});