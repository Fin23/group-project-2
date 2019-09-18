//import sql connection
var connection = require("../config/connection.js");
//helper for SQL syntax.
function printQuestionMarks(num) {
    var arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }
    return arr.toString();
}
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " +
            tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMark(vals.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        conneection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
//export orm
module.exports = orm; 