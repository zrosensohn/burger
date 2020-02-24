const orm = require("../config/orm");

const burger = {
    selectStar: function (cb) {
        orm.selectAll("burgers", (results) => {
            cb(results);
        })
    },
    insert: function(name, devoured, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, devoured], (results) => {
            cb(results)
        })
    },
    update: function(devoured, conditionalCol, conditionalVal, cb) {
        orm.updateOne("burgers", "devoured", devoured, conditionalCol, conditionalVal, (results) => {
            cb(results)
        })
    }
}

module.exports = burger;