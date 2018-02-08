const functions = require('./../functions.js');
const modelNoticiaVideo = require('./../model/noticiaVideo.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticiaVideo (idNoticia, idVideo) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaVideo"
}
/* end-Queries */
/* Services */
const createNoticiaVideo = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelNoticiaVideo, true);
}

const getAllNoticiasVideos = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticiaVideo, false);
}

/* end-Services */

module.exports = {
    createNoticiaVideo,
    getAllNoticiasVideos
};
