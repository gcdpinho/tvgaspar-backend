const functions = require('./../functions.js');
const modelNoticiaImagem = require('./../model/noticiaImagem.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticiaImagem (idNoticia, idImagem) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaImagem"
}
/* end-Queries */
/* Services */
const createNoticiaImagem = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelNoticiaImagem, true);
}

const getAllNoticiasImagens = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticiaImagem, false);
}

/* end-Services */

module.exports = {
    createNoticiaImagem,
    getAllNoticiasImagens
};
