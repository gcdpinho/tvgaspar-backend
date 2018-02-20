const config = require('./../config.js');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const cipher = crypto.createCipher(config.criptografia.alg, config.criptografia.secret);
const modelUsuario = require('./../model/usuario.js');
const functions = require('./../functions.js');
const query = require('./../dao/query.js');

/* Services */
const createUsuario = function (req, res) {
    const usuario = new modelUsuario(req.body);
    cipher.update(usuario.getSenha());
    usuario.setSenha(cipher.final(config.criptografia.tipo));
    functions.service(query.usuario.insert, req, res, [usuario.getNome(), usuario.getLogin(), usuario.getSenha(), usuario.getEmail(), usuario.getIsAdm()], "", modelUsuario, false);
}

const updateToken = function (req, res, data) {
    functions.service(query.usuario.updateToken, req, res, [data.token, data.login], function () {
        return;
    }, modelUsuario, false);
}

const getAllUsuarios = function (req, res) {
    functions.service(query.usuario.selectAll, req, res, "", "default", modelUsuario, false);
}

const findByLogin = function (req, res) {
    functions.service(query.usuario.selectByLogin, req, res, req.body.login, function (results) {

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
    }, modelUsuario, false);
}

const findByToken = function (req, res) {
    functions.service(query.usuario.selectByToken, req, res, req.body.token, "default", modelUsuario, false);
}

const updateData = function (req, res) {
    functions.service(query.usuario.updateData, req, res, [req.body.nome, req.body.email, req.body.id], "", modelUsuario, false);
}

const alterPassword = function (req, res) {
    console.log(getSenhaById(req, res, {
        id: req.body.id,
        senha: req.body.senha
    }));
}

const getSenhaById = function (req, res, data) {
    functions.service(query.usuario.selectSenhaById, req, res, [data.id], function (results) {
        var rows = JSON.parse(JSON.stringify(results[0]));
        const decipher = crypto.createDecipher(config.criptografia.alg, config.criptografia.secret);
        decipher.update(rows.senha, config.criptografia.tipo);
        if (decipher.final() == data.senha)
            return true;
        else
            return false;
    }, modelUsuario, false);
}
/* end-Services */

module.exports = {
    createUsuario,
    getAllUsuarios,
    findByLogin,
    findByToken,
    updateData,
    alterPassword
};