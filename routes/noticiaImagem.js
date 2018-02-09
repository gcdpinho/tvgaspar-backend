const noticiaImagem = require('./../controller/noticiaImagem.js');

module.exports = function (router) {

    router.post('/createNoticiaImagem', (req, res) => {
        noticiaImagem.createNoticiaImagem(req, res);
    });

    router.post('/getAllNoticiasImagens', (req, res) => {
        noticiaImagem.getAllNoticiasImagens(req, res);
    });

}