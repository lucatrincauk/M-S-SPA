App.Collections.Products = Backbone.Collection.extend({
	model: App.Models.Product,
	url: 'data/products.json'
});