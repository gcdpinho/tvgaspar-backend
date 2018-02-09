const functions = require('./../functions.js');
const modelTag = require('./../model/tag.js');
const query = require('./../dao/query.js');

/* Services */
const createTag = function (req, res){
    functions.service(query.tag.insert, req, res, [req.body.titulo], "", modelTag, false);
}

const getAllTags = function (req, res){
    functions.service(query.tag.selectAll, req, res, "", "default", modelTag, false);
}

const updateTag = function (req, res){
    functions.service(query.tag.update, req, res, [req.body.titulo, req.body.id], "", modelTag, false);
}
/* end-Services */

module.exports = {
    createTag,
    getAllTags,
    updateTag
};
