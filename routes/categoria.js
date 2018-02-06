const categoria = require('./../dao/categoria.js');

module.exports = function (router) {

    router.post('/createCategoria', (req, res) => {
        categoria.createCategoria(req, res);
    });

    router.post('/getAllCategorias', (req, res) => {
        categoria.getAllCategorias(req, res);
    });

    router.post('/updateCategoria', (req, res) => {
        categoria.updateCategoria(req, res);
    });

}