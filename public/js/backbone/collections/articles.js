Puls4.Collections.Articles=Backbone.Collection.extend({
	model:Puls4.Models.Article,
	url:"/articles/",
	name:"articles",
	initialize:function  () {
		this.on({
			add:function  (model) {
				var view =new Puls4.Views.Article({model:model});
				view.render();
				$(".posts").prepend(view.$el.fadeIn());
			}
		});
	}
});