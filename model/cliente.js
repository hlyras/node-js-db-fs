var Cliente = function() {
	this.id;
	this.nome;
	this.cpf;
	this.nascimento;

	this.save = function(callback) {
		Cliente.save(this, callback);
	};
};

Cliente.save = function(cliente, callback) {
	'use strict'

	var query = null
	if(cliente.id){
		query = "update cliente set nome='"+cliente.nome+"', cpf="+cliente.cpf+" where id="+cliente.id;
	} else {
		query = "insert into cliente(nome, cpf) values('"+cliente.nome+"','"+cliente.cpf+"');"
	};
	db.cnn.exec(query, callback);
};

Cliente.list = function(callback) {
	'use strict'

	var query = null;
	query = "select * from cliente";
	db.cnn.exec(query, callback);
};

Cliente.get = function(id, callback) {
	'use strict'

	var query = null;
	query = "select * from cliente where id="+id;
	db.cnn.exec(query, callback);
};

Cliente.remove =  function(id, callback) {
	'use strict'
	var query = null;
	query = "delete from cliente where id="+id;
	db.cnn.exec(query, callback);
};

module.exports = Cliente;
