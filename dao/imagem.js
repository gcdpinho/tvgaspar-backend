const functions = require('./../functions.js');
const modelImagem = require('./../model/imagem.js');

/* Queries */
const query = {
    insert: "INSERT INTO imagem (titulo, link) VALUES (?, ?)",
    update: "UPDATE imagem SET titulo = ?, link = ? WHERE id = ?",
    selectAll: "SELECT * FROM imagem"
}
/* end-Queries */
/* Services */
const createImagem = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo, req.body.link], "", modelImagem);
}

const getAllImagens = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelImagem);
}

const updateImagem = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.link, req.body.id], "", modelImagem);
}
/* end-Services */

module.exports = {
    createImagem,
    getAllImagems,
    updateImagem
};
