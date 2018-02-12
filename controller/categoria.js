const functions = require('./../functions.js');
const modelCategoria = require('./../model/categoria.js');
const query = require('./../dao/query.js');

/* Services */
const createCategoria = function (req, res){
    functions.service(query.categoria.insert, req, res, [req.body.titulo, req.body.texto, req.body.cor], "", modelCategoria, false);
}

const getAllCategorias = function (req, res){
    functions.service(query.categoria.selectAll, req, res, "", "default", modelCategoria, false);
}

const updateCategoria = function (req, res){
    functions.service(query.categoria.update, req, res, [req.body.titulo, req.body.texto, req.body.cor, req.body.id], "", modelCategoria, false);
}

const deleteById = function(req, res){
    functions.service(query.categoria.deleteById, req, res, [req.body.id], "", modelCategoria, false);
}
/* end-Services */

module.exports = {
    createCategoria,
    getAllCategorias,
    updateCategoria,
    deleteById
};
