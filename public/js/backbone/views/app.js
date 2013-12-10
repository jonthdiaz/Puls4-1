Puls4.Views.App=Backbone.View.extend({
	events:{
		"click .publicar":"showForm",
		"submit form":"createPost",
		"click .logo":"navigateHome"
	},
	initialize:function  ($el) {
		this.$el=$el;
	},
	render:function  () {
		
	},
	navigateHome:function  () {
		Backbone.history.navigate("/",{trigger:true});
	},
	showForm:function  () {
		this.$el.find("form").toggle();
	},
	createPost:function  (e) {
		e.preventDefault();
		var titulo=$("input[name=titulo]").val();
		var autor=$("input[name=autor]").val();
		var tag=$("input[name=tag]").val();
		var votos=$("input[name=votos]").val();
		var data={
			title:titulo,
			user:autor,
			tag:tag,
			image:"/imagenes/img3.jpg",
			votes:votos


		};
		var model=new Puls4.Models.Article(data);
		model.save();

	}
});