const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Get all data from database
router.get("/", function (req, res) {
    burger.selectAll(function (result) {
        var allBurger = { burgers: result };
        // console.log("All data " + allBurger);
        res.render("index", allBurger);
    });
});

// Create new data from client to database
router.post("/api/burgers", function (req, res) {
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name], function (result) {
            console.log("hi")
            res.json({ id: result.insertId });
        })
})

// Update devoured
router.put("/api/burgers/:id", function (req, res) {
    const updateBurgerId = "id=" + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        }, updateBurgerId, function (result) {

            console.log(updateBurgerId);

            if (result.changedRow == 0) {
                return res.status(404).end()
            }
            res.status(200).end();
        })
})

// Delete devoured Burger
router.delete("/api/burgers/:id", function (req, res) {
    const removeBurgerId = "id=" + req.params.id;

    burger.removeOne(removeBurgerId, function (result) {
        if (result.affectedRow == 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;