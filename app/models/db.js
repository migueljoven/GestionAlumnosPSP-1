var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'usuario',
  password : 'usuario',
  database : 'proyecto'
});

connection.connect();
module.exports = connection;
