var BasketView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Basket</h1>' +
		'<table class="table table-striped"><thead>' +
		'<tr><th>Item</th><th>Colour</th><th>Size</th><th>Price</th></tr></thead><tbody>' +
		'{{#each models}}<tr>' +		
		'<td><a href="#/products/{{attributes.url}}">{{attributes.name}}</a></td>' +
		'<td class="swatchBox"><div class="swatchItem {{attributes.selectedColour}}"></div></td>' +
		'<td class="sizeBox">' +
		'<div class="sizeItem">{{attributes.selectedSize}}</div></td>' +
		'<td>&pound;{{attributes.price}}</td>' +
		'</tr>{{/each}}' +
		'</tbody></table>' +
		'<a href="#/checkout" class="btn btn-success">Checkout</a>'
	),
	className: 'basket',
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});