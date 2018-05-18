const noticia = require('./../controller/noticia.js');

module.exports = function (router) {

    router.post('/createNoticia', (req, res) => {
        noticia.createNoticia(req, res);
    });

    router.post('/getAllNoticias', (req, res) => {
        noticia.getAllNoticias(req, res);
    });

    router.post('/updateNoticia', (req, res) => {
        noticia.updateNoticia(req, res);
    });

    router.post('/updateAprovacao', (req, res) => {
        noticia.updateAprovacao(req, res);
    });

    router.post('/deleteNoticiaById', (req, res) => {
        noticia.deleteById(req, res);
    });

    router.post('/getAllNoticiasAprovadas', (req, res) => {
        noticia.getAllNoticiasAprovadas(req, res);
    });

    router.post('/getNoticiasAprovadasByCategoria', (req, res) => {
        noticia.getNoticiasAprovadasByCategoria(req, res);
    });
}