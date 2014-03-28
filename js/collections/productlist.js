var ProductList = Backbone.Collection.extend({
	comparator: 'category',
	model: Product,
	url: 'data/products.json'
});