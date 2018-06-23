// Inside the`burgers_controller.js` file, import Express
var express = require("express");

// Create the`router` for the app
var router = express.Router();

// Import the model (`burger.js`) to use its database functions.
var burger = require("../models/burger.js");

// Index route
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.selectAll(function (burgerData) {
        res.render('index', { burger_data: burgerData });
    });
});

router.post('/burgers/insertOne', function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        res.redirect('/');
    });
});

router.put('/burgers/:id', function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        res.sendStatus(200);
    });
});

// router.delete('/delete/:id', function (req, res) {
//     burger.deleteOne([req.params.id], function () {
//         res.redirect('/');
//     });
// });

// Export the`router` at the end of your file for server.js to use.
module.exports = router;