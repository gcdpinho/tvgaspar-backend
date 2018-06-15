const noticia = require('./../controller/noticia.js');
const video = require('./../controller/video.js');
const categoria = require('./../controller/categoria.js');

module.exports = function (router) {

    router.get('/getAllNoticiasAprovadas', (req, res) => {
        noticia.getAllNoticiasAprovadas(req, res);
    });
    
    router.get('/getAllCategorias', (req, res) => {
        categoria.getAllCategorias(req, res);
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

    router.post('/getVideoByTag', (req, res) => {
        video.getVideoByTag(req, res);
    });
}