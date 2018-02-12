const video = require('./../controller/video.js');

module.exports = function (router) {

    router.post('/createVideo', (req, res) => {
        video.createVideo(req, res);
    });

    router.post('/getAllVideos', (req, res) => {
        video.getAllVideos(req, res);
    });

    router.post('/updateVideo', (req, res) => {
        video.updateVideo(req, res);
    });

    router.post('/deleteVideoById', (req, res) => {
        video.deleteById(req, res);
    });

}