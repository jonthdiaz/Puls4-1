Puls4.Routers.Base=Backbone.Router.extend({
	routes:{
		"":"root",
		"article/:id":"articleSingle"
	},
	root:function  () {
		window.app.state="root";
		window.app.article="null";
	},
	articleSingle:function  (id) {
		window.app.state="articleSingle";
		window.app.article=id;
	}
});