const usuario = require('./../dao/usuario.js');
const verifyToken = require('./../app.js');

module.exports = function (router) {

    router.post('/login', (req, res) => {
        usuario.findByLogin(req, res);
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