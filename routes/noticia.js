const noticia = require('./../dao/noticia.js');

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


}