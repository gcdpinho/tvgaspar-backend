const publicidade = require('./../dao/publicidade.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createPublicidade', (req, res) => {
        publicidade.createPublicidade(req, res);
    });

    router.post('/getAllPublicidades', (req, res) => {
        publicidade.getAllPublicidades(req, res);
    });

    router.post('/updatePublicidade', (req, res) => {
        publicidade.updatePublicidade(req, res);
    });

}