var CheckoutView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Checkout</h1>' +
		'<p>Delivery options on this page</p>' +
		'<ul>' + 
		'{{#each models}}<li>' +		
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a> ' +
		'<span class="label label-info">' +
		'{{attributes.price}}&pound;</span> ' +
		'</li>{{/each}}' +
		'</ul>' +
		'<a href="#/payment" class="btn btn-success">Payment</a>'

	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});