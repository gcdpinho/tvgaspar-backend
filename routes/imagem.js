const imagem = require('./../controller/imagem.js');

module.exports = function (router) {

    router.post('/createImagem', (req, res) => {
        imagem.createImagem(req, res);
    });

    router.post('/getAllImagens', (req, res) => {
        imagem.getAllImagens(req, res);
    });

    router.post('/updateImagem', (req, res) => {
        imagem.updateImagem(req, res);
    });  
    router.post('/deleteImagemById', (req, res) => {
        imagem.deleteById(req, res);
    });

}