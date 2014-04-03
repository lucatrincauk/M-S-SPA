App.Views.MiniBasketView = Backbone.View.extend({

	template: Handlebars.compile(
		'{{#each models}}<li>' +
		'<a href="#">{{attributes.name}}</a>' +
		'</li>{{/each}}' +
		'<li class="divider"></li>' +
		'<li><a href="#/basket">Open Basket</a></li>'
	),


	tagName: 'ul',
	className: 'dropdown-menu',
	
	render: function () {
		console.log('rendering basket');
		this.$el.html(this.template(this.collection));
		return this;
	}

});