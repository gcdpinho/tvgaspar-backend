const functions = require('./../functions.js');
const modelInsercao = require('./../model/insercao.js');
const query = require('./../dao/query.js');

/* Services */
const createInsercao = function (req, res){
    functions.service(query.insercao.insert, req, res, [req.body.campo, req.body.dtCadastro], "", modelInsercao, false);
}

const getAllInsercoes = function (req, res){
    functions.service(query.insercao.selectAll, req, res, "", "default", modelInsercao, false);
}

const getInsercoes = function (req, res){
    functions.service(query.insercao.select, req, res, [req.body.campo], "default", modelInsercao, false);
}

/* end-Services */

module.exports = {
    createInsercao,
    getAllInsercoes,
    getInsercoes
};
