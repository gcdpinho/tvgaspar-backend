const functions = require('./../functions.js');
const modelCategoria = require('./../model/categoria.js');

/* Queries */
const query = {
    insert: "INSERT INTO categoria (titulo, texto, cor) VALUES (?, ?, ?)",
    update: "UPDATE categoria SET titulo = ?, texto = ?, cor = ? WHERE id = ?",
    selectAll: "SELECT * FROM categoria"
}
/* end-Queries */
/* Services */
const createCategoria = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo, req.body.texto, req.body.cor], "", modelCategoria, false);
}

const getAllCategorias = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelCategoria, false);
}

const updateCategoria = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.texto, req.body.cor, req.body.id], "", modelCategoria, false);
}
/* end-Services */

module.exports = {
    createCategoria,
    getAllCategorias,
    updateCategoria
};
