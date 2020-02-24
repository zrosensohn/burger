const connection = require('../config/connection');

const orm = {
    selectAll: (table, cb) => {
        connection.query("SELECT * FROM ??", [table], (err, results) => {
            if (err) throw err;
            cb(results);
        })
    },
    insertOne: (table, columns, values, cb) => {
        connection.query("INSERT INTO ?? (??) VALUES (?);", [table, columns, values], (err, results) => {
            if (err) throw err;
            cb(results);
        })
    },
    updateOne: (table, setColumn, setVal, conditionalCol, conditionalVal, cb) => {
        connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?", [table, setColumn, setVal, conditionalCol, conditionalVal], (err, results) => {
            if (err) throw err;
            cb(results);
        })
    }
}

module.exports = orm