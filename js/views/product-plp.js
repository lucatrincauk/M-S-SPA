App.Views.ProductPlpView = Backbone.View.extend({
	tagName: 'ul',
	render: function () {
		this.$el.empty();
		console.log('Rendering PLP');
		var that = this;
		this.collection.each(function(product){		
			var singleProductView = new App.Views.ProductPlpSingleView({ model: product });
			that.$el.append(singleProductView.render().el);
		}, this);
		return this;
	}

});
