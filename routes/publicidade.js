const publicidade = require('./../controller/publicidade.js');

module.exports = function (router) {

    router.post('/createPublicidade', (req, res) => {
        publicidade.createPublicidade(req, res);
    });

    router.post('/getAllPublicidades', (req, res) => {
        publicidade.getAllPublicidades(req, res);
    });

    router.post('/updatePublicidade', (req, res) => {
        publicidade.updatePublicidade(req, res);
    });

    router.post('/deletePublicidadeById', (req, res) => {
        publicidade.deleteById(req, res);
    });

}