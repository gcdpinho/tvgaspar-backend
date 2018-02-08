const functions = require('./../functions.js');
const modelNoticiaCategoria = require('./../model/noticiaCategoria.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticiaCategoria (idNoticia, idCategoria) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaCategoria"
}
/* end-Queries */
/* Services */
const createNoticiaCategoria = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelNoticiaCategoria, true);
}

const getAllNoticiasCategorias = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticiaCategoria, false);
}

/* end-Services */

module.exports = {
    createNoticiaCategoria,
    getAllNoticiasCategorias
};
