const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        })
    },

    updateOne: function(){

    },

    removeOne: function(){

    }
}

module.exports = burger;