const mysql = require('mysql');
const config = require('./../config.js');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const cipher = crypto.createCipher(config.criptografia.alg, config.criptografia.secret);

const query = {
    insert: "INSERT INTO usuario (nome, login, senha, email, adm) VALUES (?, ?, ?, ?)",
    updateToken: "UPDATE usuario SET token = ? WHERE login = ?",
    selectAll: "SELECT nome, login, email, adm FROM usuario",
    selectByLogin: "SELECT * FROM usuario WHERE login = ?",
    selectByToken: "SELECT nome, email, adm FROM usuario WHERE token = ?"
}

const createUsuario = function (req, res) {
    cipher.update(req.body.senha);
    req.body.senha = cipher.final(config.criptografia.tipo);
    service(query.insert, req, res, [req.body.nome, req.body.login, req.body.senha, req.body.email, req.body.adm], "");
}

const updateToken = function (req, res, data) {
    service(query.updateToken, req, res, [data.token, data.login], function () {
        return;
    });
}

const getAllUsuarios = function (req, res) {
    service(query.selectAll, req, res, "", "");
}

const findByLogin = function (req, res) {
    service(query.selectByLogin, req, res, req.body.login, function (results) {
        
        if (isEmptyObject(results))
            res.json({
                success: false,
                message: "Falha na autenticação. Usuário não encontrado."
            });
        else {
            var rows = JSON.parse(JSON.stringify(results[0]))
            const decipher = crypto.createDecipher(config.criptografia.alg, config.criptografia.secret);
            decipher.update(rows.senha, config.criptografia.tipo);
            if (decipher.final() != req.body.senha)
                res.json({
                    success: false,
                    message: "Falha na autenticação. Senha inválida."
                });
            else {
                const payload = {
                    admin: rows.adm.data[0] == 1 ? true : false
                };
                var token = jwt.sign(payload, config.criptografia.secret, {
                    expiresIn: "1d" // expires in 24 hours
                });

                updateToken(req, res, {
                    token: token,
                    login: req.body.login
                });

                res.json({
                    success: true,
                    message: 'Token criado com sucesso.',
                    token: token
                });
            }
        }
    });
}

const findByToken = function (req, res) {
    service(query.selectByToken, req, res, req.body.token, "");
}

function isEmptyObject(obj) {
    var name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
}

const service = function (query, req, res, data, callback) {
    const connection = mysql.createConnection(config.db);

    connection.query(query, data, function (error, results, fields) {
        if (error)
            res.json(error);
        else {
            if (callback == "")
                res.json(results);
            else
                callback(results);
        }
        connection.end();
    });
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    findByLogin,
    findByToken
};