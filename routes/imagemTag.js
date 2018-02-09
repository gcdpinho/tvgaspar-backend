const imagemTag = require('./../controller/imagemTag.js');

module.exports = function (router) {

    router.post('/createImagemTag', (req, res) => {
        imagemTag.createImagemTag(req, res);
    });

    router.post('/getAllImagensTags', (req, res) => {
        imagemTag.getAllImagensTags(req, res);
    });

}