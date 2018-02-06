const videoTag = require('./../dao/videoTag.js');

module.exports = function (router) {

    router.post('/createVideoTag', (req, res) => {
        videoTag.createVideoTag(req, res);
    });

    router.post('/getAllVideosTags', (req, res) => {
        videoTag.getAllVideosTags(req, res);
    });

}