const imagem = require('./../dao/imagem.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createImagem', (req, res) => {
        imagem.createImagem(req, res);
    });

    router.post('/getAllImagens', (req, res) => {
        imagem.getAllImagens(req, res);
    });

    router.post('/updateImagem', (req, res) => {
        imagem.updateImagem(req, res);
    });


}