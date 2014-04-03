App.Views.PaymentView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Payment</h1>' +
		'<p>Payment options on this page</p>' +
		'<form><label for="paymentCard">Card Number</label> <input name="payment" type="text" id="paymentCard"/><br><label for="paymentName">Cardholder Name</label> <input name="payment" type="text" id="paymentName"/></form>' +
		'<a href="#/confirmation" class="btn btn-success">confirmation</a>'

	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		return this;
	}

});