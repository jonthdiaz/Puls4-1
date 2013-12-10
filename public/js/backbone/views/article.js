Puls4.Views.Article=Backbone.View.extend({
	tagName:"article",
	className:"post",
	events: {
		"click .acciones .votos .up" : "upvote",
		"click .acciones .votos .down" : "downvote",
		"click":"navigate"
	},
	initialize:function  () {
		var self=this;
		this.template = swig.compile( $('#article-template').html() );
		this.templateExtended=swig.compile($("#article-extended-template").html());
		window.routers.base.on("route:root",function  () {
				self.$el.css("display","");
				self.render();
		});
		window.routers.base.on("route:articleSingle",function  () {
			if(window.app.article===self.model.get('id')){
				self.renderExtended();
			}else{
				self.$el.hide();
			}

			
		});
		this.model.on({change:function  (model) {
			if(window.app.article===self.model.get('id')){
				self.renderExtended();
			}else{
				self.$el.css("display","");
				self.render();
			}
			
		}});
	},
	render:function  () {
		var data = this.model.toJSON();
		var html = this.template(data);
		this.$el.html( html );
	},
	renderExtended:function  () {
		var data=this.model.toJSON();
		var html=this.templateExtended(data);
		this.$el.html(html);
	},
	navigate:function  () {
		Backbone.history.navigate("article/"+this.model.get("id"),{trigger:true});
	},
	upvote:function  (e) {
		e.preventDefault();
		e.stopPropagation();
		var votes=parseInt(this.model.get("votes"),10);
		this.model.set("votes",++votes);
		this.model.save();

	},
	downvote:function  (e) {
		e.preventDefault();
		e.stopPropagation();
		var votes=parseInt(this.model.get("votes"),10);
		this.model.set("votes",--votes);
		this.model.save();
	}
});