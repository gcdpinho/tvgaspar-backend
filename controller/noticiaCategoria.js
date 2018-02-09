const functions = require('./../functions.js');
const modelNoticiaCategoria = require('./../model/noticiaCategoria.js');
const query = require('./../dao/query.js');

/* Services */
const createNoticiaCategoria = function (req, res){
    functions.service(query.noticiaCategoria.insert, req, res, req.body.data, "", modelNoticiaCategoria, true);
}

const getAllNoticiasCategorias = function (req, res){
    functions.service(query.noticiaCategoria.selectAll, req, res, "", "default", modelNoticiaCategoria, false);
}

/* end-Services */

module.exports = {
    createNoticiaCategoria,
    getAllNoticiasCategorias
};
