const usuario = require('./../dao/usuario.js');

module.exports = function (router) {

    router.get('/createUsuario', (req, res) => {
        usuario.createUsuario(req, res, {
            nome: "teste",
            senha: "teste12345",
            adm: 0
        });
    });

    router.get('/getAllUsuarios', (req, res) => {
        usuario.getAllUsuarios(req, res);
    });

    router.post('/login', (req, res) => {
        usuario.findByNome(req, res);
    });
}