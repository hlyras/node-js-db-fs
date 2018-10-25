var App = require('../../config/app')

var Produto = function(){
	this.id;
	this.name;
	this.color;
	this.quantity;

	this.save = function(callback){
		Produto.save(this, callback);
	}
};

Produto.saveAll = function(produtos, callback){
  var fs = require('fs');
  fs.writeFile(App.produto_db, JSON.stringify(produtos), function(err) {
    if(err) {
      console.log(err);
    } else {
    	console.log('file written');
    	callback(produtos);
    }
  });
}


Produto.save = function(produto, callback){
  Produto.list(function(dados) {
	  if(dados == "") { 
	  	dados = [];
	    var hash = {
				id: 0,
				name: produto.name,
				color: produto.color,
				quantity: parseInt(produto.quantity)
			}
			dados.push(hash);
			Produto.saveAll(dados, function(){
				callback();
			});
	  } else {
	  	var produtos = [];
	  	for(var i in dados){
	  		produtos.push(dados[i]);
	  	};
			var hash = {
				id: dados.length,
				name: produto.name,
				color: produto.color,
				quantity: parseInt(produto.quantity)
			}
			produtos.push(hash)
			Produto.saveAll(produtos, function(){
				callback();
			});
	  }
  });
}



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
	var fs = require('fs');
  fs.readFile(App.produto_db, function(err, data) {
    produtos = [];
    if(data != ""){
	    if (err) { 
	      console.log(err);
	    }
	    else{
	     	produtos = JSON.parse(data);
	    }
    } else {
    	if (err) { 
	      console.log(err);
	    }
	    else{
	     	produtos = [];
	    }
    }
    // console.log(produtos);
    callback(produtos);
  });
}


// Produto.filtrar = function(tipo, cor, callback){
// 	'use strict'

// 	var query = null;
// 	if(tipo!='0' && cor!='0'){
// 		query = "select * from produto where tipo='"+tipo+"' and cor = '"+cor+"';";
// 	} else if(tipo!='0' && cor=='0'){
// 		query = "select * from produto where tipo='"+tipo+"';";
// 	} else if(tipo=='0' && cor!='0'){
// 		query = "select * from produto where cor='"+cor+"';";
// 	} else if(tipo=='0' && cor=='0'){
// 		query = "select * from produto;";
// 	};
// 	db.cnn.exec(query, callback);
// };

// Produto.remove = function(id, callback){
// 	'use strict'

// 	var query = null;
// 	query = 'delete from produto where id='+id;
// 	db.cnn.exec(query, callback);
// };


module.exports = Produto;