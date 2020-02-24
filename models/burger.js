const orm = require("../config/orm");

const burger = {
    selectStar: function (cb) {
        orm.selectAll("burgers", function(results){
            cb(results);
        })
    }
}

orm.selectAll("burgers", function(results) {
    console.log(results);
})

// burger.selectStar(results => {
//     console.log(results);
// })