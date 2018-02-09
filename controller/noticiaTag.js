const functions = require('./../functions.js');
const modelNoticiaTag = require('./../model/noticiaTag.js');
const query = require('./../dao/query.js');

/* Services */
const createNoticiaTag = function (req, res){
    functions.service(query.noticiaTag.insert, req, res, req.body.data, "", modelNoticiaTag, true);
}

const getAllNoticiasTags = function (req, res){
    functions.service(query.noticiaTag.selectAll, req, res, "", "default", modelNoticiaTag, false);
}

/* end-Services */

module.exports = {
    createNoticiaTag,
    getAllNoticiasTags
};
