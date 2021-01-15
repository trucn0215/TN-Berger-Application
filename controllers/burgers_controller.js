const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Get all data from database
router.get("/", function(req, res) {
    burger.selectAll(function(result){
        var allBurger = {burger: result};
        // console.log("All data " + allBurger);
        res.render("index", allBurger);
    });
});

// Create new data from client to database
router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.burger_name, function(result){
        res.json({ id: result.insertId });
    })
})

router.put("/api/burgers/:id", function(req, res){

})

router.delete("/api/burgers/:id", function(req, res){
    const removeBurgerId = req.params.id;

    burger.removeOne(removeBurgerId, function(result){
        if(data.affectedRow == 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;