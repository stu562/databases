var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'chat'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected to mySQL');
});

module.exports = connection;


//uses mysql npm modules to connect to database server