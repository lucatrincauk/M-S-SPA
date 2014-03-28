var PaymentView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Payment</h1>' +
		'<p>Payment options on this page</p>' +
		'<ul>' + 
		'{{#each models}}<li>' +		
		'<a href="#/products/{{attributes.url}}">' +
		'{{attributes.name}}</a> ' +
		'<span class="label label-info">' +
		'{{attributes.price}}&pound;</span> ' +
		'</li>{{/each}}' +
		'</ul>' +
		'<a href="#/confirmation" class="btn btn-success">confirmation</a>'

	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});