'use strict'

var express = require('express');
var app = express();

// Test
app.get('/', (req, res, next ) => {
    res.status(200).send({
       ok: true,
       message: 'Server request successful.'
    })
});

app.get('/main', (req, res, next ) => {
    res.status(200).send({
       ok: true,
       message: 'Server API-REST PROTOCOL 73 online'
    });
});

module.exports = app;
