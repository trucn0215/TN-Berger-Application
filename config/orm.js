const connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

const orm = {
    // Select all Burgers
    selectAll: function (tableInput, cb) {
        const queryData = "SELECT * FROM " + tableInput + ";";
        connection.query(queryData, function (err, result) {
            if (err) throw err;

            cb(result);
        })
    },

    // Add new Burger to database
    insertOne: function (table, col, val, cb) {
        const queryData = "INSERT INTO " + table + " (" + col.toString() + ") " + "VALUES (" + printQuestionMarks(val.length) + ")";
        console.log(queryData);
        connection.query(queryData, val, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
    },

    // Update burger to move to devoured side
    updateOne: function (table, col, updateBurgerId, cb) {
        const queryData = `UPDATE ${table} SET devoured = 1 WHERE ${updateBurgerId}`;
        connection.query(queryData, function (err, result) {
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