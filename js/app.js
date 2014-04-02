var App = Backbone.Router.extend({
	routes: {
		"": "productPlp",
		"products/:id": "productPdp",
		"basket": "basket",
		"categories/:category": "categories",
		"checkout": "checkout",
		"payment": "payment",
		"confirmation": "confirmation"

	}, 

	initialize: function  () {
		this.products = new Products();
		this.products.fetch();
		this.basketItems = new Products();

		this.product = new Product();

		this.productPdpView = new ProductPdpView({model: this.product});
		
		this.productPlpView = new ProductPlpView({collection: this.products});
		this.basketView = new BasketView({collection: this.basketItems});		
		this.checkoutView = new CheckoutView({collection: this.basketItems});
		this.paymentView = new PaymentView({collection: this.basketItems});
		this.miniBasketView = new MiniBasketView({collection: this.basketItems});
		this.confirmationView = new ConfirmationView({collection: this.basketItems});
		this.categoryView = new CategoryView({collection: this.products});
	},

	productPlp: function () {
		$('#app').html(this.productPlpView.render().el);
		$('.dropdown-menu').html(this.miniBasketView.render().el);
	},

	/* categories: function (category) {
		this.categoryView.options.category = category;
		$('#app').html(this.categoryView.render().el);
	},*/

	productPdp: function (id) {
		this.productPdpView.model = this.products.get(id);
		$('#app').html(this.productPdpView.render().el);
	},
	basket: function () {
		if(!this.basketItems.length){
			$('#app').html('Basket empty');
		} else {
			$('#app').html(this.basketView.render().el);
		}
	},
	checkout: function () {
		$('#app').html(this.checkoutView.render().el);		
	},
	payment: function () {
		$('#app').html(this.paymentView.render().el);		
	},
	confirmation: function () {
		$('#app').html(this.confirmationView.render().el);		
	},

});

var app = new App();

$(function() {
	Backbone.history.start();
});