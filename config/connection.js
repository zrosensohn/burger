// Set up MySQL connection.
var mysql = require("mysql");
const pw = require("../password");
var connection = mysql.createConnection({
  host: "127.0.0.1",
  port:  3306,
  user:  "root",
  password:  pw,
  database:  "burger_db"
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