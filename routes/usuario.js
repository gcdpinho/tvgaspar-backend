const usuario = require('./../dao/usuario.js');
const config = require('./../config.js');
const jwt = require('jsonwebtoken');

const verifyToken = function (req, res, next) {
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
}

module.exports = function (router) {

    router.get('/', function(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    });

    router.post('/login', (req, res) => {
        usuario.findByNome(req, res);
    });

    router.use(verifyToken);

    router.post('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res);
    });

    router.post('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res);
    });

}