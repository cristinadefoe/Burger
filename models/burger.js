// Inside`burger.js`, import `orm.js` into`burger.js`
var orm = require("../config/orm.js");

// Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
// selectAll
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    // insertOne
    insertOne: function (name, cb) {
        orm.insertOne("burgers", ['burger_name', 'devoured'], [name, false], cb);
    },

    // updateOne
    updateOne: function (id, cb) {
        var condition = 'id=' + id;
        orm.updateOne("burgers", { devoured: true }, condition, cb);
    },

    // deleteOne
    // deleteOne: function (conditionVal, cb) {
    //     orm.deleteOne("burgers", 'id', conditionVal, function (res) {
    //         cb(res);
    //     });
    // }
};

// Export at the end of the`burger.js` file.
module.exports = burger;