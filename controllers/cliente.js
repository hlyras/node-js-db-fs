var db = require('../db/connection');

var clienteController = {
	index:function(req, res){
		'use strict'

		res.render('cliente/home');
	}
}

module.exports = clienteController;