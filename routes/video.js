const video = require('./../dao/video.js');
const functions = require('./../functions.js');

module.exports = function (router) {

    router.use(functions.verifyToken);

    router.post('/createVideo', (req, res) => {
        video.createVideo(req, res);
    });

    router.post('/getAllVideo', (req, res) => {
        video.getAllVideos(req, res);
    });

    router.post('/updateVideo', (req, res) => {
        ideo.updateVideo(req, res);
    });

}