const functions = require('./../functions.js');
const modelNoticiaTag = require('./../model/noticiaTag.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticiaTag (idNoticia, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaTag"
}
/* end-Queries */
/* Services */
const createNoticiaTag = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelNoticiaTag, true);
}

const getAllNoticiasTags = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticiaTag, false);
}

/* end-Services */

module.exports = {
    createNoticiaTag,
    getAllNoticiasTags
};
