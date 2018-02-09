const functions = require('./../functions.js');
const modelNoticiaImagem = require('./../model/noticiaImagem.js');
const query = require('./../dao/query.js');

/* Services */
const createNoticiaImagem = function (req, res){
    functions.service(query.noticiaImagem.insert, req, res, req.body.data, "", modelNoticiaImagem, true);
}

const getAllNoticiasImagens = function (req, res){
    functions.service(query.noticiaImagem.selectAll, req, res, "", "default", modelNoticiaImagem, false);
}

/* end-Services */

module.exports = {
    createNoticiaImagem,
    getAllNoticiasImagens
};
