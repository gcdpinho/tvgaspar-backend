const functions = require('./../functions.js');
const modelNoticia = require('./../model/noticia.js');

/* Queries */
const query = {
    insert: "INSERT INTO noticia (manchete, submanchete, texto, autor, dtCadastro, flgAtivo) VALUES (?, ?, ?, ?, ?, ?)",
    update: "UPDATE noticia SET manchete = ?, submanchete = ?, texto = ?, autor = ?, dtCadastro = ?, flgAtivo = ? WHERE id = ?",
    selectAll: "SELECT * FROM noticia"
}
/* end-Queries */
/* Services */
const createNoticia = function (req, res){
    functions.service(query.insert, req, res, [req.body.manchete, req.body.submanchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.flgAtivo], "", modelNoticia, false);
}

const getAllNoticias = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelNoticia, false);
}

const updateNoticia = function (req, res){
    functions.service(query.update, req, res, [req.body.manchete, req.body.submanchete, req.body.texto, req.body.autor, req.body.dtCadastro, req.body.flgAtivo, req.body.id], "", modelNoticia, false);
}
/* end-Services */

module.exports = {
    createNoticia,
    getAllNoticias,
    updateNoticia
};
