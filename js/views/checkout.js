var CheckoutView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Checkout</h1>' +
		'<p>Delivery options on this page</p>' +
		'<form><input name="delivery" value="deliveryHome" type="radio" id="deliveryHome"/> <label for="deliveryHome">Standard Delivery</label><br><input name="delivery" value="deliveryCollection" type="radio" id="deliveryCollection"/> <label for="deliveryCollection">Store Collection</label></form>' +
		'<a href="#/payment" class="btn btn-success">Payment</a>'

	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});