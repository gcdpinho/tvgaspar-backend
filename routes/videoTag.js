const videoTag = require('./../dao/videoTag.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createVideoTag', (req, res) => {
        videoTag.createVideoTag(req, res);
    });

    router.post('/getAllVideosTags', (req, res) => {
        videoTag.getAllVideosTags(req, res);
    });

}