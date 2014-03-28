var ProductDetails = Backbone.View.extend({
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
		'<button type="button" class="btn btn-success">Add to basket</button>' +
		'</div></div>'
	),

	initialize: function  () {
		this.listenTo(this.model, "change", this.render);
		var that;
	},
	addToBasket: function (e) {
		that = this.el;
		app.basketItems.add(this.model, 1);
		alert('Added to basket');

		console.log(this.el);
		//$('body').find('.dropdown').addClass('open');

	},
	selectSwatch: function (e) {
		that = e.target;
		this.model.set({
			selectedColour: $(that).data('colour')
		});
		$('.swatchItem').removeClass('selected');
		$(that).addClass('selected');
		//console.log(this.model);
	},
	
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		this.delegateEvents({
			'click .btn-success': 'addToBasket',
			'click .swatchItem': 'selectSwatch'
		});
		return this;
	}
});