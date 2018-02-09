const noticiaVideo = require('./../controller/noticiaVideo.js');

module.exports = function (router) {

    router.post('/createNoticiaVideo', (req, res) => {
        noticiaVideo.createNoticiaVideo(req, res);
    });

    router.post('/getAllNoticiasVideos', (req, res) => {
        noticiaVideo.getAllNoticiasVideos(req, res);
    });

}