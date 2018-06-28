const functions = require('./../functions.js');
const modelPublicidade = require('./../model/publicidade.js');
const query = require('./../dao/query.js');

/* Services */
const createPublicidade = function (req, res) {
    functions.service(query.publicidade.insert, req, res, [req.body.titulo, req.body.tipo, req.body.texto, req.body.link, req.body.flgAtivo, req.body.idImagem], "", modelPublicidade, false);
}

const getAllPublicidades = function (req, res) {
    functions.service(query.publicidade.selectAll, req, res, "", "default", modelPublicidade, false);
}

const updatePublicidade = function (req, res) {
    functions.service(query.publicidade.update, req, res, [req.body.titulo, req.body.tipo, req.body.texto, req.body.link, req.body.id], "", modelPublicidade, false);
}

const deleteById = function (req, res) {
    functions.service(query.publicidade.deleteById, req, res, [req.body.id], "", modelPublicidade, false);
}

const getPublicidadesByTipo = function (req, res) {
    functions.service(query.publicidade.selectPublicidadesByTipo, req, res, [req.body.tipo], "", modelPublicidade, false);
}
/* end-Services */

module.exports = {
    createPublicidade,
    getAllPublicidades,
    updatePublicidade,
    deleteById,
    getPublicidadesByTipo
};