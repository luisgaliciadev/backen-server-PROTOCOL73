'use strict'

var jwt = require('jsonwebtoken');

// Configs
var SEED = require('../config/config').SEED;

// Verificar token
exports.verificarToken = function(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).send({
            message:'La peticion no tiene la cabecera de autenticacion'
        });
    }
    var token = req.headers.authorization;
    jwt.verify(token, SEED, (err, decode) => {
        if (err) {
            return res.status(404).send({
                ok: false,
                message: 'Petición no Autorizada.',
                error: err
            });
        } 
        req.user = decode.user;
        next();
    });
}