const usuario = require('./../controller/usuario.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.post('/login', (req, res) => {
        usuario.findByLogin(req, res);
    });

    // router.use(functions.verifyToken);

    router.post('/findByToken', (req, res) => {
        usuario.findByToken(req, res);
    });

    router.post('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res);
    });

    router.post('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res);
    });

    router.post('/updateData', (req, res) => {
        usuario.updateData(req, res);
    });

    router.post('/alterPassword', (req, res) => {
        usuario.alterPassword(req, res);
    });
}