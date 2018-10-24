var db = require('../db/connection');
var Produto = require('../model/produto');

var produtoController = {
	index:function(req, res) {
		'use strict'

		Produto.list(function(rows, err){
			if(!err) {
				res.render('produto/home', {
					produtos: rows
				});
			} else {
				res.send('err', 500)
			}
		});
	},
	add:function(req, res) {
		'use strict'
		res.render('produto/add');
	},
	create:function(req, res){
		'use strict'

		var produto = new Produto();
		produto.nome = req.body.nome;
		produto.cpf = req.body.cpf;

		produto.save(function(rows, err) {
			if(!err) {
				res.redirect('/produto');
			} else {
				res.send('err', 500);
			};
		});
	},
	list:function(req,res){
		'use strict'

		Produto.list(function(rows,err){
			if(!err){
				res.render('produto/list', {
					produtos: rows
				});
			} else {
				res.send('err',500)
			}
		});
	},
	entrada:function(req,res){
		'use strict'

		Produto.list(function(rows, err){
			if(!err){
				res.render('produto/entrada', {
					produtos: rows
				});	
			} else {
				res.send('err', 500);
			}
		})
	},
	saida:function(req,res){
		'use strict'

		res.render('produto/saida');	
	},
	edit: function(req, res) {
		'use strict'

		Produto.get(req.param('id'), function(rows, err){
			if(!err) {
				res.render('produto/edit', {
					produto:rows[0]
				});
			} else {
				res.send('err', 500);
			}
		});
	},
	update: function(req, res) {
		'use strict'

		var produto = new Produto();
		produto.id = req.body.id;
		produto.nome = req.body.nome;
		produto.cpf = req.body.cpf;

		produto.save(function(rows, err) {
			if(!err){
				res.redirect('/produto');
			} else {
				res.send('err', 500);
			}
		});
	},
	remove: function(req, res){
		'use strict'

		Produto.remove(req.param('id'), function(rows, err) {
			if(!err) {
				res.redirect('/produto')
			} else {
				res.send('err', 500);
			}
		});
	},
	filtrar: function(req, res){
		'use strict'

		console.log(req.body.produtoTipo);
		console.log(req.body.produtoCor);

		Produto.filtrar(req.body.produtoTipo, req.body.produtoCor, function(rows, err){
			if(!err){
				res.render('produto/list', {
					produtos: rows
				});
			} else {
				res.send('err',500)
			};
		});
	}
};

module.exports = produtoController;