const insercao = require('./../controller/insercao.js');

module.exports = function (router) {

    router.post('/createInsercao', (req, res) => {
        insercao.createInsercao(req, res);
    });

    router.post('/getAllInsercoes', (req, res) => {
        insercao.getAllInsercoes(req, res);
    });

    router.post('/getInsercoes', (req, res) => {
        insercao.getInsercoes(req, res);
    });

}