const imagemTag = require('./../dao/imagemTag.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createImagemTag', (req, res) => {
        imagemTag.createImagemTag(req, res);
    });

    router.post('/getAllImagensTags', (req, res) => {
        imagemTag.getAllImagensTags(req, res);
    });

}