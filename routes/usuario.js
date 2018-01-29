const usuario = require('./../dao/usuario.js');
const config = require('./../config.js');
const jwt = require('jsonwebtoken');

const verifyToken = function (req, res, next) {
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

module.exports = function (router) {

    router.get('/login', (req, res) => {
        usuario.findByNome(req, res);
    });

    router.use(verifyToken);

    router.post('/findByToken', (req, res) => {
        usuario.findByToken(req, res);
    });

    router.post('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res);
    });

    router.post('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res);
    });

}