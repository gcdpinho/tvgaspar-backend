const functions = require('./../functions.js');
const modelVideoTag = require('./../model/videoTag.js');

/* Queries */
const query = {
    insert: "INSERT INTO videoTag (idVideo, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM videoTag"
}
/* end-Queries */
/* Services */
const createVideoTag = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelVideoTag, true);
}

const getAllVideosTags = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelVideoTag, false);
}

/* end-Services */

module.exports = {
    createVideoTag,
    getAllVideosTags
};
