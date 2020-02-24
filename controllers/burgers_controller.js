const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectStar(data => {
        let hbsObj = {
            burgers: data
        };
    console.log(hbsObj);
    res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert(req.params.name, req.params.devoured, (result) => {
        res.json({id: result.insertID});
    });
});

router.put("/api/burgers/:id/", function(req, res) {
    let id = req.params.id;
    let devoured = req.body.devoured
    burger.update(devoured, "id", id, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;

