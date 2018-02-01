const categoria = require('./../dao/categoria.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createCategoria', (req, res) => {
        categoria.createCategoria(req, res);
    });

    router.post('/getAllCategoria', (req, res) => {
        categoria.getAllCategorias(req, res);
    });

    router.post('/updateCategoria', (req, res) => {
        categoria.updateCategoria(req, res);
    });

}