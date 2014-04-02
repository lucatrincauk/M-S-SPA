var Products = Backbone.Collection.extend({
	model: Product,
	url: 'data/products.json'
});