const video = require('./../dao/video.js');

module.exports = function (router) {

    router.post('/createVideo', (req, res) => {
        video.createVideo(req, res);
    });

    router.post('/getAllVideos', (req, res) => {
        video.getAllVideos(req, res);
    });

    router.post('/updateVideo', (req, res) => {
        ideo.updateVideo(req, res);
    });

}