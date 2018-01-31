const functions = require('./../functions.js');
const modelVideo = require('./../model/Video.js');

/* Queries */
const query = {
    insert: "INSERT INTO video (titulo, texto, link) VALUES (?, ?, ?)",
    update: "UPDATE video SET titulo = ?, texto = ?, link = ? WHERE id = ?",
    selectAll: "SELECT * FROM video"
}
/* end-Queries */
/* Services */
const createVideo = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo, req.body.texto, req.body.link], "", modelVideo);
}

const getAllVideos = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelVideo);
}

const updateVideo = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.texto, req.body.link, req.body.id], "", modelVideo);
}
/* end-Services */

module.exports = {
    createVideo,
    getAllVideos,
    updateVideo
};
