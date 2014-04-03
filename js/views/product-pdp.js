App.Views.ProductPdpView = Backbone.View.extend({
	template: Handlebars.compile(
		'<div class="row">' +
		'<div class="col-xs-12 col-sm-6 col-md-4">' +
		'<img src="photos/{{imagepath}}" class="img-polaroid" />' +
		'</div>' +
		'<div class="col-xs-12 col-sm-6 col-md-8">' +
		'<div class="page-header"><h1>{{name}} <small>{{category}}</small></h1></div>' +
		'<p>&pound;{{price}}</p>' +
		'<div class="swatchBox">{{#each colour}}' +
		'<div class="swatchItem {{this}}" data-colour="{{this}}"></div> ' +
		'{{/each}}</div>' +
		'<div class="sizeBox">{{#each size}}' +
		'<div class="sizeItem" data-size="{{this}}">{{this}}</div>' +
		'{{/each}}</div>' +
		'<button type="button" class="btn btn-success">Add to basket</button>' +
		'</div></div>'
	),

	initialize: function  () {
		var that;
	},
	addToBasket: function (e) {
		that = this.el;
		basketItems.add(this.model, 1);
		alert('Added to basket');
	},
	selectSwatch: function (e) {
		that = e.target;
		this.model.set({
			selectedColour: $(that).data('colour')
		});
		$('.swatchBox .swatchItem').removeClass('selected');
		$(that).addClass('selected');
	},
	selectSize: function (e) {
		that = e.target;
		this.model.set({
			selectedSize: $(that).data('size')
		});
		$('.sizeBox .sizeItem').removeClass('selected');
		$(that).addClass('selected');
	},
	
	render: function () {
		console.log('Rendering PDP');
		this.$el.html(this.template(this.model.toJSON()));
		this.delegateEvents({
			'click .btn-success': 'addToBasket',
			'click .swatchItem': 'selectSwatch',
			'click .sizeItem': 'selectSize'
		});
		return this;
	}
});