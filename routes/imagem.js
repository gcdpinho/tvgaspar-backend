const imagem = require('./../dao/imagem.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createImagem', (req, res) => {
        imagem.createImagem(req, res);
    });

    router.post('/getAllImagem', (req, res) => {
        imagem.getAllImagems(req, res);
    });

    router.post('/updateImagem', (req, res) => {
        imagem.updateImagem(req, res);
    });


}