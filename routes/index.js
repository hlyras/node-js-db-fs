var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home');
var produtoController = require('../controllers/produto');
var clienteController = require('../controllers/cliente');

router.get('/', homeController.index);
router.get('/about', homeController.about);

router.get('/produto', produtoController.index);
router.get('/produto/list', produtoController.list);
router.post('/produto/filtrar', produtoController.filtrar);
router.get('/produto/entrada', produtoController.entrada);
router.get('/produto/saida', produtoController.saida);

router.get('/estados.json', function(request, response, next) {
	var estados = [
		{'SP': 'São Paulo'},
		{'RJ': 'Rio de Janeiro'},
		{'MG': 'Minas Gerais'}
	];
	response.send(estados);
});

router.get('/cidades.json', function(request, response, next) {
	var estados_cidades = [
		{'SP': [
		  'São Paulo',
		  'Osasco',
		  'Aguaí'
		]},
		{'RJ': [
		  'Rio de Janeiro',
		  'Niterói',
		  'Petrópolis'
		]},
		{'MG': [
		  'Belo Horizonte',
		  'Ouro Preto',
		  'Contagem'
		]}
	];

	response.send(estados_cidades[1]);
});

router.get('/cliente', clienteController.index);

module.exports = router;