const functions = require('./../functions.js');
const modelImagem = require('./../model/imagem.js');
const query = require('./../dao/query.js');

/* Services */
const createImagem = function (req, res){
    functions.service(query.imagem.insert, req, res, [req.body.titulo, req.body.link], "", modelImagem, false);
}

const getAllImagens = function (req, res){
    functions.service(query.imagem.selectAll, req, res, "", "default", modelImagem, false);
}

const updateImagem = function (req, res){
    functions.service(query.imagem.update, req, res, [req.body.titulo, req.body.link, req.body.id], "", modelImagem, false);
}
/* end-Services */

module.exports = {
    createImagem,
    getAllImagens,
    updateImagem
};
