var AppRouter = Backbone.Router.extend({
	routes: {
		"": "list",
		"products/:product": "productPDP",
		"basket": "basket",
		"categories/:category": "categories",
		"checkout": "checkout",
		"payment": "payment",
		"confirmation": "confirmation"

	},

	initialize: function  () {
		this.productList = new ProductList();
		this.productList.fetch();
		this.basketItems = new ProductList();

		this.product = new Product();
		this.productPDP = new ProductDetails(
			{
				model: this.product
			}
		);
		
		this.menuView = new MenuView({collection: this.productList});
		this.basketView = new BasketView({collection: this.basketItems});		
		this.checkoutView = new CheckoutView({collection: this.basketItems});
		this.paymentView = new PaymentView({collection: this.basketItems});
		this.confirmationView = new ConfirmationView({collection: this.basketItems});
		this.categoryView = new CategoryView({collection: this.productList});
	},

	list: function () {
		$('#app').html(this.menuView.render().el);
	},

	categories: function (category) {
		this.categoryView.options.category = category;
		$('#app').html(this.categoryView.render().el);
	},

	productPDP: function (product) {
		this.productPDP.model = this.productList.get(product);
		$('#app').html(this.productPDP.render().el);
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

var app = new AppRouter();

$(function() {
	Backbone.history.start();
});