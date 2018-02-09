const tag = require('./../controller/tag.js');

module.exports = function (router) {

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