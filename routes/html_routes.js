var express = require("express");

var router = express.Router();

//home page route
router.get('/', function(req, res) {
    res.send('Welcome to tucker app');
});

// Export routes for server.js to use.
module.exports = router;