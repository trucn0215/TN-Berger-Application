const orm = require("../config/orm.js");

const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function(col, val, cb){
        orm.insertOne("burgers",col, val, function(res){
            cb(res);
        })
    },

    updateOne: function (updateBurgerId, cb) {
        orm.updateOne("burgers", updateBurgerId, function(res){
            cb(res);
        })
    },

    removeOne: function (removeBurgerId, cb) {
        orm.removeOne("burgers", removeBurgerId, function (res) {
            cb(res);
        })
    }
}

module.exports = burger;