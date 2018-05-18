const noticia = require('./../controller/noticia.js');

module.exports = function (router) {

    router.get('/getAllNoticiasAprovadas', (req, res) => {
        noticia.getAllNoticiasAprovadas(req, res);
    });

    router.post('/getNoticiasAprovadasByCategoria', (req, res) => {
        noticia.getNoticiasAprovadasByCategoria(req, res);
    });
}