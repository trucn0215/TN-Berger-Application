const orm = require("../config/orm.js");

const burger = {
    // Select all the burger
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    // Add new Burger
    insertOne: function(col, val, cb){
        orm.insertOne("burgers",col, val, function(res){
            cb(res);
        })
    },

    // Update Ordered burger to Devoured burger
    updateOne: function (col,updateBurgerId, cb) {
        orm.updateOne("burgers", col, updateBurgerId, function(res){
            cb(res);
        })
    },

    // Remove/delete a burger
    removeOne: function (removeBurgerId, cb) {
        orm.removeOne("burgers", removeBurgerId, function (res) {
            cb(res);
        })
    }
}

module.exports = burger;