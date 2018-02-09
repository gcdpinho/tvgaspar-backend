const noticiaCategoria = require('./../controller/noticiaCategoria.js');

module.exports = function (router) {

    router.post('/createNoticiaCategoria', (req, res) => {
        noticiaCategoria.createNoticiaCategoria(req, res);
    });

    router.post('/getAllNoticiasCategorias', (req, res) => {
        noticiaCategoria.getAllNoticiasCategorias(req, res);
    });

}