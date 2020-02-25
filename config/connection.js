// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DBHOST,
  port:  process.env.DBPORT,
  user:  process.env.DBUSER,
  password:  process.env.DBPASSWORD,
  database:  process.env.DBNAME
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;