const noticiaTag = require('./../dao/noticiaTag.js');

module.exports = function (router) {

    router.post('/createNoticiaTag', (req, res) => {
        noticiaTag.createNoticiaTag(req, res);
    });

    router.post('/getAllNoticiasTags', (req, res) => {
        noticiaTag.getAllNoticiasTags(req, res);
    });

}