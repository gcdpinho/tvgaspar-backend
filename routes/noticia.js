const noticia = require('./../dao/noticia.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

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