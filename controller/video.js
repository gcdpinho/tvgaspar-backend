const functions = require('./../functions.js');
const modelVideo = require('./../model/video.js');
const query = require('./../dao/query.js');

/* Services */
const createVideo = function (req, res){
    functions.service(query.video.insert, req, res, [req.body.titulo, req.body.texto, req.body.link], "", modelVideo, false);
}

const getAllVideos = function (req, res){
    functions.service(query.video.selectAll, req, res, "", "default", modelVideo, false);
}

const updateVideo = function (req, res){
    functions.service(query.video.update, req, res, [req.body.titulo, req.body.texto, req.body.link, req.body.id], "", modelVideo, false);
}
/* end-Services */

module.exports = {
    createVideo,
    getAllVideos,
    updateVideo
};
