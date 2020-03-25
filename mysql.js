var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '192.168.203.141',
    user: 'root',
    password: 'root',
    database: 'shop1906'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is:123 ', results[0].solution);
});

connection.end();