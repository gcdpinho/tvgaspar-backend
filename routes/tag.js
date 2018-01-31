const tag = require('./../dao/tag.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createTag', (req, res) => {
        tag.createTag(req, res);
    });

    router.post('/getAllTag', (req, res) => {
        tag.getAlltags(req, res);
    });

    router.post('/updateTag', (req, res) => {
        tag.updateTag(req, res);
    });


}