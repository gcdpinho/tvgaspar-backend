const usuario = require('./../dao/usuario.js');

module.exports = function (router, data) {

    router.get('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res, data, "");
    });

    router.get('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res, data);
    });

    router.get('/login', (req, res) => {
        usuario.findByNome(req, res);
    });
}