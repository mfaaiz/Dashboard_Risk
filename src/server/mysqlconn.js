const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost', // Your connection adress (localhost).
  user: 'root',     // Your database's username.
  password: '',        // Your database's password.
  database: 'wazuuh db',  // Your database's name.
  multipleStatements: true
});
// Starting our app.

/* var apm = require('elastic-apm-node').start({
  serviceName: 'risk-manager',
  serverUrl: 'http://localhost:8200'
}) */
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT full_log FROM alert WHERE rule_id=23505 ', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      /* var result = results[0];
      result.full_log = JSON.parse(result.full_log); */
      res.send(results);

      console.log(results);
    });
  });
});
/* app.get('/', function (req, res) {
    let quer="SELECT Router_name FROM input; SELECT * FROM risk_reg";
   connection.getConnection(function (err, connection) {
        // Executing the MySQL query (select all data from the 'users' table).
        
        connection.query(quer,[2,1],
         function (error, results, fields) {
            // If some error occurs, we throw an error.
            if (error) throw error;

            // Getting the 'response' from the database and sending it to our route. This is were the data is.
            res.send(results)
           
            console.log(results[0]);
            console.log(results[1]);
        });
    }); 
}); */
//console.log(connection.connection.results);
// Starting our server.
app.listen(4000, () => {
  console.log('Go to http://localhost:4000 so you can see the data.');
});
