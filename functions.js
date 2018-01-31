const mysql = require('mysql');
const config = require('./config.js');
const jwt = require('jsonwebtoken');

var isEmptyObject = function (obj) {
    var name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}

var callbackDefault = function (res, results, model) {
    var arrNoticia = [];
    if (!isEmptyObject(results)) {
        results.forEach(function (element, index) {
            arrNoticia.push(new model(element));
        });
    }

    res.json(arrNoticia);
}

const service = function (query, req, res, data, callback) {
    const connection = mysql.createConnection(config.db);

    connection.query(query, data, function (error, results, fields) {
        if (error)
            res.json(error);
        else {
            switch (callback) {
                case "":
                    res.json(results);
                    break;
                case "default":
                    callbackDefault(res, results);
                    break;
                default:
                    callback(results)
                    break;
            }
        }
        connection.end();
    });
}

var verifyToken = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['token'];

    if (token) {
        jwt.verify(token, config.criptografia.secret, function (error, decoded) {
            if (error)
                return res.json({
                    success: false,
                    message: "Falha ao autenticar o token."
                });
            else {
                req.decoded = decoded;
                next();
            }
        });
    } else
        return res.status(403).send({
            success: false,
            message: "Requisição sem token."
        });
}

module.exports = {
    isEmptyObject,
    service,
    verifyToken
};