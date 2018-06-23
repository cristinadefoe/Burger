// Import(require) `connection.js` into`orm.js`
var connection = require('./connection.js');

// Helper function for SQL syntax.
// To pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {

        arr.push(key + "=" + ob[key]);
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// In the`orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.
// `selectAll()`
// `insertOne()`
// `updateOne()`

// Object for SQL statement functions
// `selectAll()`
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // `insertOne()`
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // `updateOne()`
    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

        // // `deleteOne()`
        // deleteOne: function (table, condition, objColVals, cb) {
        //     var queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

        //     connection.query(queryString, [objColVals], function (err, data) {
        //         if (err) throw err;
        //         callback(data);
        //     });
        // }
};

// Export the ORM object in `module.exports`.
module.exports = orm;
