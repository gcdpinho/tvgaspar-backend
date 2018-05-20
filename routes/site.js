const noticia = require('./../controller/noticia.js');

module.exports = function (router) {

    router.get('/getAllNoticiasAprovadas', (req, res) => {
        noticia.getAllNoticiasAprovadas(req, res);
    });

    router.post('/getNoticiasAprovadasByTag', (req, res) => {
        noticia.getNoticiasAprovadasByTag(req, res);
    });
}