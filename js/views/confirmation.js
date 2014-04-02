var ConfirmationView = Backbone.View.extend({

	template: Handlebars.compile(
		'<h1>Confirmation</h1>' +
		'<p>Order has been placed. Basket emptied</p>' +
		'<a href="#" class="btn btn-success">Start again</a>'

	),
	
	
	render: function () {
		this.$el.html(this.template(this.collection));
		this.collection.reset();
		return this;
	}

});