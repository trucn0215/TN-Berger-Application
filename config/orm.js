const connection = require("../config/connection.js")

// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

const orm = {
    selectAll: function (tableInput, cb) {
        const queryData = "SELECT * FROM " + tableInput + ";";
        connection.query(queryData, function(err, result){
            if (err) throw err;

            cb(result);
        })
    },

    insertOne: function () {

    },

    updateOne: function () {

    },
    removeOne: function () {

    }
}

module.exports = orm;