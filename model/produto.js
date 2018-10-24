var Produto = function(){
	this.id;
	this.nome;
	this.cor;
	this.quantidade;

	this.save = function(callback){
		Produtos.save(this,callback);
	}
};

Produto.create = function(produto, callback){
	'use strict'

	var query = null;
	if(produto.id){
		query = "update produto set nome='"+produto.nome+"', cor="+produto.cor+" where id="+produto.id;
	} else {
		query = "insert into produto(nome, cor) values('"+produto.nome+"','"+produto.cor+"');"
	};
	db.cnn.exec(query, callback);
};

Produto.get = function(id, callback){
	'use strict'

	var query = null;
	query = "select * from produto where id='"+id+"';";
	db.cnn.exec(query, callback);
};

// Produto.get = function(id, id_cliente, callback){
// 	'use strict'

// 	var query = null;
// 	query = "select * from produto where id='"+id+"';select * from cliente where id='"+id_cliente+"';";
// 	// query = {id:0,id_cliente:1}
// 	// var a = query[0].id;
// 	// var b = query[0].id_cliente;
// 	db.cnn.exec(query, callback);
// };

Produto.list = function(callback){
	'use strict'

	var query = null;
	query = 'select * from produto';
	db.cnn.exec(query,callback);
};


Produto.filtrar = function(tipo, cor, callback){
	'use strict'

	var query = null;
	if(tipo!='0' && cor!='0'){
		query = "select * from produto where tipo='"+tipo+"' and cor = '"+cor+"';";
	} else if(tipo!='0' && cor=='0'){
		query = "select * from produto where tipo='"+tipo+"';";
	} else if(tipo=='0' && cor!='0'){
		query = "select * from produto where cor='"+cor+"';";
	} else if(tipo=='0' && cor=='0'){
		query = "select * from produto;";
	};
	db.cnn.exec(query, callback);
};

Produto.remove = function(id, callback){
	'use strict'

	var query = null;
	query = 'delete from produto where id='+id;
	db.cnn.exec(query, callback);
};

module.exports = Produto;