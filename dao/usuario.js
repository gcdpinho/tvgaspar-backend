const mysql = require('mysql');
const config = require('./../config.js');
const crypto = require("crypto");
const cipher = crypto.createCipher(config.criptografia.alg, config.criptografia.secret);

const query = {
    insert: "INSERT INTO usuario (nome, senha, adm) VALUES (?, ?, ?)",
    selectAll: "SELECT * FROM usuario",
    selectByNome: "SELECT * FROM usuario WHERE nome = ?"
}

const createUsuario = function (req, res, data) {
    cipher.update(data.senha);
    data.senha = cipher.final(config.criptografia.tipo);
    service(query.insert, req, res, [data.nome, data.senha, data.adm], "");
}

const getAllUsuarios = function (req, res, data) {
    service(query.selectAll, req, res, "", "");
}

const findByNome = function (req, res) {
    console.log(req.body.nome);
    service(query.selectByNome, req, res, req.body.nome, function (results) {
        if (!results)
            res.json({
                success: false,
                message: "Falha na autenticação. Usuário não encontrado."
            });
        else {
            if (result.senha != req.body.senha)
                res.json({
                    success: false,
                    message: "Falha na autenticação. Senha inválida."
                });
            else {
                const payload = {
                    admin: result.adm.data[0] == 1 ? true : false
                };
                var token = jwt.sign(payload, config.criptografia.secret, {
                    expiresInMinutes: 1440 // expires in 24 hours
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