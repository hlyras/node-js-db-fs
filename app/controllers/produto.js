var db = require('../../config/app');
var Produto = require('../models/produto');

var produtoController = {
	index:function(req, res) {
		'use strict'

		res.render('produto/home');
	},
	add:function(req, res) {
		'use strict'
		res.render('produto/add');
	},
	create:function(req, res){
		'use strict'

		var produto = new Produto();
		produto.name = req.body.name;
		produto.color = req.body.color;
		produto.quantity = req.body.quantity;
		produto.save(function(){
    		res.redirect("/produto/add");
		});
	},
	list:function(req,res){
		'use strict'

		Produto.list(function(rows){
			res.render('produto/list', {
				produtos: rows
			});
		})
	}
};

module.exports = produtoController;