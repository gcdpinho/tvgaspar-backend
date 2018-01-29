const mysql = require('mysql');
const config = require('./../config.js');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const cipher = crypto.createCipher(config.criptografia.alg, config.criptografia.secret);

const query = {
    insert: "INSERT INTO usuario (nome, senha, adm) VALUES (?, ?, ?)",
    updateToken: "UPDATE usuario SET token = ? WHERE nome = ?",
    selectAll: "SELECT * FROM usuario",
    selectByNome: "SELECT * FROM usuario WHERE nome = ?"
}

const createUsuario = function (req, res) {
    cipher.update(req.body.senha);
    req.body.senha = cipher.final(config.criptografia.tipo);
    service(query.insert, req, res, [req.body.nome, req.body.senha, req.body.adm], "");
}

const updateToken = function (req, res, data) {
    service(query.updateToken, req, res, [data.token, data.nome], "");
}

const getAllUsuarios = function (req, res) {
    service(query.selectAll, req, res, "", "");
}

const findByNome = function (req, res) {
    service(query.selectByNome, req, res, req.body.nome ,function (results) {
        if (!results)
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
                    nome: req.body.nome
                });

                //window.localStorage.setItem("token", token);

                res.json({
                    success: true,
                    message: 'Token criado com sucesso.',
                });
            }
        }
    });
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
    findByNome
};