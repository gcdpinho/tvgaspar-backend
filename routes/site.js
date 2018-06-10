const noticia = require('./../controller/noticia.js');

module.exports = function (router) {

    router.get('/getAllNoticiasAprovadas', (req, res) => {
        noticia.getAllNoticiasAprovadas(req, res);
    });

    router.post('/getNoticiasAprovadasByTag', (req, res) => {
        noticia.getNoticiasAprovadasByTag(req, res);
    });

    router.post('/getNoticiasAprovadasByCategoria', (req, res) => {
        noticia.getNoticiasAprovadasByCategoria(req, res);
    });

    router.post('/getNoticiasAprovadasByTagByCategoria', (req, res) => {
        noticia.getNoticiasAprovadasByTagByCategoria(req, res);
    });

    router.post('/getNoticiasAprovadasByIdNoticia', (req, res) => {
        noticia.getNoticiasAprovadasByIdNoticia(req, res);
    });
}