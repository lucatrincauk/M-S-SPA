var Product = Backbone.Model.extend({
	urlRoot: 'data/products.json',
	defaults: {
		category: '',
		imagepath: 'img/default.jpg',
		name: '',
		price: 0
	}
});