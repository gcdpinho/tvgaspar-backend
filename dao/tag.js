const functions = require('./../functions.js');
const modelTag = require('./../model/tag.js');

/* Queries */
const query = {
    insert: "INSERT INTO tag (titulo) VALUES (?)",
    update: "UPDATE tag SET titulo = ? WHERE id = ?",
    selectAll: "SELECT * FROM tag"
}
/* end-Queries */
/* Services */
const createTag = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo], "", modelTag);
}

const getAllTags = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelTag);
}

const updateTag = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.id], "", modelTag);
}
/* end-Services */

module.exports = {
    createTag,
    getAlltags,
    updateTag
};