var BasketView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Basket</h1>' +
		'<ul>' + 
		'{{#each models}}<li>' +		
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a> ' +
		'<span class="label label-info">' +
		'&pound;{{attributes.price}}</span> ' +
		'<div class="swatchBox">' +
		'<div class="swatchItem {{attributes.selectedColour}}"></div> ' +
		'</div>' +
		'</li>{{/each}}' +
		'</ul>' +
		'<a href="#/checkout" class="btn btn-success">Checkout</a>'
	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});