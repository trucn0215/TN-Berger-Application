const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Get all data from database
router.get("/", function(req, res) {
    burger.selectAll(function(data){
        var allBurger = {burger: data};
        console.log(allBurger);
        res.render("index", allBurger);
    })
})

// Create new data from client to database
router.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],function(data){
        res.json({id: data.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res){

})

router.delete("/api/burgers/:id", function(req, res){

})

module.exports = router;