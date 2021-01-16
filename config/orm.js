const connection = require("../config/connection.js")

const orm = {
    selectAll: function (tableInput, cb) {
        const queryData = "SELECT * FROM " + tableInput + ";";
        connection.query(queryData, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },

    // TODO: This is not working
    insertOne: function (table, col, val, cb) {
        const queryData = `INSERT INTO ${table} (${col}) VALUES (?);`;
        connection.query(queryData, val, function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    // Update burger to move to devoured side
    updateOne: function (table, devouredBurger, updateBurgerId, cb) {
        const queryData = `UPDATE ${table} SET devoured = ${devouredBurger} WHERE ${updateBurgerId};`;
        connection.query(queryData,function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    // Remove Burger
    removeOne: function (table, removeBurgerId, cb) {
        const queryData = `DELETE FROM ${table} WHERE ${removeBurgerId};`;
        connection.query(queryData, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;