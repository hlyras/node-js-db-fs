var express = require('express');
var router = express.Router();
var homeController = require('../app/controllers/home');
var produtoController = require('../app/controllers/produto');

router.get('/', homeController.index);
router.get('/about', homeController.about);

router.get('/produto', produtoController.index);
router.get('/produto/list', produtoController.list);
router.get('/produto/add', produtoController.add);
router.post('/produto/create', produtoController.create);
// router.get('/produto/entrada', produtoController.entrada);
// router.get('/produto/saida', produtoController.saida);
// router.get('/produto/ajax/:id/addPedido', produtoController.addPedido);

// router.post('/pedido/cadastrar', pedidoController.create);

module.exports = router;