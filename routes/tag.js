const tag = require('./../dao/tag.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createTag', (req, res) => {
        tag.createTag(req, res);
    });

    router.post('/getAllTags', (req, res) => {
        tag.getAllTags(req, res);
    });

    router.post('/updateTag', (req, res) => {
        tag.updateTag(req, res);
    });

}