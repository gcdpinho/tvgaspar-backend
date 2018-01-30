const tag = require('./../dao/tag.js');
const verifyToken = require('./../app.js');

module.exports = function (router) {

    router.use(verifyToken);

    router.post('/createTag', (req, res) => {
        tag.createtag(req, res);
    });

    router.post('/getAllTag', (req, res) => {
        tag.getAlltags(req, res);
    });

    router.post('/updateTag', (req, res) => {
        tag.updateTag(req, res);
    });


}