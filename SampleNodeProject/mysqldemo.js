var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'nodetraining'  // use sql mini project database here
  });

connection.connect((err, ...args)=>{
    console.log(err);
    console.log(args);
})