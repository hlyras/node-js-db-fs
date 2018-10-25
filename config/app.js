mysql = require('mysql');
connectionString = 'mysql://root:root@localhost/teste';

db = {}
db.cnn = {};
db.cnn.exec = function(query, callback) {
  var connection = mysql.createConnection(connectionString);
  connection.query(query, function(err, rows) {
    callback(rows, err);
    connection.end();
  });
};


var App = {
	pedido_db: "dados/pedido.js",
	produto_db: "dados/produto.js",
	cliente_db: "dados/cliente.js",
	db: db
}

module.exports = App;