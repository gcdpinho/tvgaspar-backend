const config = require('./../config.js');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const cipher = crypto.createCipher(config.criptografia.alg, config.criptografia.secret);
const modelUsuario = require('./../model/usuario.js');
const functions = require('./../functions.js');

/* Queries */
const query = {
    insert: "INSERT INTO usuario (nome, login, senha, email, isAdm) VALUES (?, ?, ?, ?)",
    updateToken: "UPDATE usuario SET token = ? WHERE login = ?",
    selectAll: "SELECT nome, login, email, isAdm FROM usuario",
    selectByLogin: "SELECT * FROM usuario WHERE login = ?",
    selectByToken: "SELECT nome, email, isAdm FROM usuario WHERE token = ?"
}
/* end-Queries */
/* Services */
const createUsuario = function (req, res) {
    const usuario = new modelUsuario(req.body);
    cipher.update(usuario.getSenha());
    usuario.setSenha(cipher.final(config.criptografia.tipo));
    functions.service(query.insert, req, res, [usuario.getNome(), usuario.getLogin(), usuario.getSenha(), usuario.getEmail(), usuario.getIsAdm()], "");
}

const updateToken = function (req, res, data) {
    functions.service(query.updateToken, req, res, [data.token, data.login], function () {
        return;
    });
}

const getAllUsuarios = function (req, res) {
    functions.service(query.selectAll, req, res, "", "default");
}

const findByLogin = function (req, res) {
    functions.service(query.selectByLogin, req, res, req.body.login, function (results) {

        if (functions.isEmptyObject(results))
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
                    admin: rows.isAdm == 1 ? true : false
                };
                var token = jwt.sign(payload, config.criptografia.secret, {
                    expiresIn: "1d"
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
    functions.service(query.selectByToken, req, res, req.body.token, "default");
}
/* end-Services */

module.exports = {
    createUsuario,
    getAllUsuarios,
    findByLogin,
    findByToken
};