App.Views.ProductPlpView = Backbone.View.extend({
	tagName: 'ul',
	render: function () {
		console.log('Rendering PLP');
		var that = this;
		//this.$el.html(this.template(this.collection));
		this.collection.each(function(product){		

			var singleProductView = new App.Views.ProductPlpSingleView({ model: product });

			that.$el.append(singleProductView.render().el);
		}, this);
		return this;
	}

});
