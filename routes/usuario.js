const usuario = require('./../dao/usuario.js');
const config = require('./../config.js');
const jwt = require('jsonwebtoken');

module.exports = function (router) {

    router.post('/login', (req, res) => {
        usuario.findByNome(req, res);
    });

    router.use(function (req, res, next) {
        var token = req.body.token || req.query.token || req.headers['token'];

        if (token) {
            jwt.verify(token, config.criptografia.secret, function (error, decoded) {
                if (error)
                    return res.json({
                        sucess: false,
                        message: "Falha ao autenticar o token."
                    });
                else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else
            return res.status(403).send({
                sucess: false,
                message: "Requisição sem token."
            });
    });

    router.get('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res);
    });

    router.get('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res);
    });

}