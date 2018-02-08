const functions = require('./../functions.js');
const modelNoticia = require('./../model/noticia.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticia (manchete, subManchete, texto, autor, dtCadastro, flgAtivo, idUsuario) VALUES (?, ?, ?, ?, STR_TO_DATE(?, '%d/%m/%Y %H:%i'), ?, ?)",
    update: "UPDATE noticia SET manchete = ?, subManchete = ?, texto = ?, autor = ?, dtCadastro = STR_TO_DATE(?, '%d/%m/%Y %H:%i'), flgAtivo = ?, idUsuario = ? WHERE id = ?",
    selectAll: "SELECT * FROM noticia"
}
/* end-Queries */
/* Services */
const createNoticia = function (req, res){
    functions.service(query.insert, req, res, [req.body.manchete, req.body.subManchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.flgAtivo, req.body.idUsuario], "", modelNoticia, false);
}

const getAllNoticias = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticia, false);
}

const updateNoticia = function (req, res){
    functions.service(query.update, req, res, [req.body.manchete, req.body.subManchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.flgAtivo, req.body.idUsuario, req.body.id], "", modelNoticia, false);
}
/* end-Services */

module.exports = {
    createNoticia,
    getAllNoticias,
    updateNoticia
};
