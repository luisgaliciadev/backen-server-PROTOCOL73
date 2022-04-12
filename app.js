'use strict'

// Requires
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS ");
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Content-Type', 'text/plain');
    next();
});

// Import Routes
var appRoutes = require('./routes/app');

app.listen(3000, () => {
    console.log('Express Server PROTOCOL73, Port: 3000: \x1b[32m%s\x1b[0m', 'Online');
});

// Routes
app.use('/api', appRoutes);