const routes = require('express').Router();

/* serves main page */
routes.get("/", function(req, res) {
    res.sendfile('index.html');
})

module.exports = routes;