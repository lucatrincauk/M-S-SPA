var Product = Backbone.Model.extend({
	urlRoot: 'data/products.json',
	url: 'data/products.json',
	defaults: {
		category: 'Cat',
		imagepath: 'default.gif',
		name: 'Title',
		price: 0,
		colour: "blank",
		size: "blank"
	}
});