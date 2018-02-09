const functions = require('./../functions.js');
const modelNoticiaVideo = require('./../model/noticiaVideo.js');
const query = require('./../dao/query.js');

/* Services */
const createNoticiaVideo = function (req, res){
    functions.service(query.noticiaVideo.insert, req, res, req.body.data, "", modelNoticiaVideo, true);
}

const getAllNoticiasVideos = function (req, res){
    functions.service(query.noticiaVideo.selectAll, req, res, "", "default", modelNoticiaVideo, false);
}

/* end-Services */

module.exports = {
    createNoticiaVideo,
    getAllNoticiasVideos
};
