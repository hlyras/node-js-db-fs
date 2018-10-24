var db = require('../db/connection');

var homeController = {
	index:function(req, res) {
		res.render('pages/home');
	},
	about:function(req,res){
		var About = {
			name:"Cataclysm",
			CEO:"Wi Cooperation",
			year:2018
		};
		res.render('pages/about', {
			about: About
		});
	}
};

module.exports = homeController;