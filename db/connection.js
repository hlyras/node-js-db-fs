mysql = require('mysql');
connectionString = 'mysql://root:root@localhost/cataclysm';
db = function(){}
db.cnn = function(){};
db.cnn.exec = function(query, callback) {
  var connection = mysql.createConnection(connectionString);
  connection.query(query, function(err, rows) {
  	// rows irá retornar uma variavel em array contendo os itens
  	// alterados pelo mysql (1 ou mais em uma única variável);
  	// console.log(rows);
    if(err) throw err;
    callback(rows, err);
    connection.end();
  });
};
module.exports = db;

// var mysql = require('mysql');

// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// db.connect(function(err) {
//   if (err) throw err;
//   console.log("mysql Connected!");
// });



// module.exports = db;

//sudo /etc/init.d/mysql start
//sudo /opt/lampp/xampp startmysql
//sudo /opt/lampp/xampp start