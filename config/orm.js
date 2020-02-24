const connection = require('../config/connection');

const orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    insertOne: function(table, columns, values, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?);", [table, columns, values], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: function(table, setColumn, setVal, conditionalCol, conditionalVal, cb) {
        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, setColumn, setVal, conditionalCol, conditionalVal], function(err, results) {
            if (err) throw err;
            cb(results);
        })
    }
}

orm.updateOne("burgers", "devoured", false, "burger_name", "Thanksgiving", function(results) {
    console.log(results);
});

module.exports = orm;