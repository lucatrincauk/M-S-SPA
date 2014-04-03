$(function(){
App.Router = Backbone.Router.extend({
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
		product = new App.Models.Product();
		console.log('App initialize');
		products = new App.Collections.Products();
		products.fetch({
			success: function (products) {
				console.log('fetched products');
				Backbone.history.loadUrl();
			}
		});

		basketItems = new App.Collections.Products();
		productPdpView = new App.Views.ProductPdpView({model: product});		
		productPlpView = new App.Views.ProductPlpView({collection: products});
		basketView = new App.Views.BasketView({collection: basketItems});		
		checkoutView = new App.Views.CheckoutView({collection: basketItems});
		paymentView = new App.Views.PaymentView({collection: basketItems});
		miniBasketView = new App.Views.MiniBasketView({collection: basketItems});
		confirmationView = new App.Views.ConfirmationView({collection: basketItems});
		return this;
	},

	productPlp: function () {
		$('#core').html(productPlpView.render().el);
		//$('#basket').html(miniBasketView.render().el);
		$('#basket').html(basketView.render().el);
	},

	productPdp: function (id) {
		productPdpView = new App.Views.ProductPdpView({model: products.get(id)});
		$('#core').html(productPdpView.render().el);
		$('#basket').html(basketView.render().el);
	},
	basket: function () {
		if(!basketItems.length){
			$('#core').html('Basket empty');
			$('#basket').html('');
		} else {
			$('#core').html(basketView.render().el);
		}
	},
	checkout: function () {
		$('#core').html(checkoutView.render().el);		
	},
	payment: function () {
		$('#core').html(paymentView.render().el);		
	},
	confirmation: function () {
		$('#core').html(confirmationView.render().el);		
	}
});
new App.Router;
Backbone.history.start();
});