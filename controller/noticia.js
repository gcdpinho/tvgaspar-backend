const functions = require('./../functions.js');
const modelNoticia = require('./../model/noticia.js');
const query = require('./../dao/query.js');

/* Services */
const createNoticia = function (req, res){
    functions.service(query.noticia.insert, req, res, [req.body.manchete, req.body.subManchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.flgAtivo, req.body.aprovacao, req.body.idUsuario], "", modelNoticia, false);
}

const getAllNoticias = function (req, res){
    functions.service(query.noticia.selectAll, req, res, "", "default", modelNoticia, false);
}

const updateNoticia = function (req, res){
    functions.service(query.noticia.update, req, res, [req.body.manchete, req.body.subManchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.id], "", modelNoticia, false);
}

const updateAprovacao = function(req, res){
    functions.service(query.noticia.updateAprovacao, req, res, [req.body.aprovacao, req.body.id], "", modelNoticia, false);
}

const deleteById = function(req, res){
    functions.service(query.noticia.deleteById, req, res, [req.body.id], "", modelNoticia, false);
}

const getAllNoticiasAprovadas = function(req, res){
    functions.service(query.noticia.selectAllNoticiaAprovada, req, res, [], "", modelNoticia, false);
}

const getNoticiasAprovadasByCategoria = function(req, res){
    functions.service(query.noticia.selectNoticiaAprovadaByCategoria, req, res, [req.body.tituloTag], "", modelNoticia, false);
}

/* end-Services */

module.exports = {
    createNoticia,
    getAllNoticias,
    updateNoticia,
    updateAprovacao,
    deleteById,
    getAllNoticiasAprovadas,
    getNoticiasAprovadasByCategoria
};
