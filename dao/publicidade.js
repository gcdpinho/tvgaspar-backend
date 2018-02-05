const functions = require('./../functions.js');
const modelPublicidade = require('./../model/publicidade.js');

/* Queries */
const query = {
    insert: "INSERT INTO publicidade (titulo, tipo, texto, link, flgAtivo, idImagem) VALUES (?, ?, ?, ?, ?, ?)",
    update: "UPDATE publicidade SET titulo = ?, tipo = ?, texto = ?, link = ?, flgAtivo = ?, idImagem = ? WHERE id = ?",
    selectAll: "SELECT * FROM publicidade"
}
/* end-Queries */
/* Services */
const createPublicidade = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo, req.body.tipo, req.body.texto, req.body.link, req.body.flgAtivo, req.body.idImagem], "", modelPublicidade, false);
}

const getAllPublicidades = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelPublicidade, false);
}

const updatePublicidade = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.titulo, req.body.texto, req.body.link, req.body.flgAtivo, req.body.idImagem, req.body.id], "", modelPublicidade, false);
}
/* end-Services */

module.exports = {
    createPublicidade,
    getAllPublicidades,
    updatePublicidade
};
