const functions = require('./../functions.js');
const modelImagem = require('./../model/imagem.js');
var Client = require('ftp');
var fs = require('fs');


/* Queries */
const query = {
    insert: "INSERT INTO imagem (titulo, link) VALUES (?, ?)",
    update: "UPDATE imagem SET titulo = ?, link = ? WHERE id = ?",
    selectAll: "SELECT * FROM imagem"
}
/* end-Queries */
/* Services */
const createImagem = function (req, res){
    functions.service(query.insert, req, res, [req.body.titulo, req.body.link], "", modelImagem, false);
}

const getAllImagens = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelImagem, false);
}

const updateImagem = function (req, res){
    functions.service(query.update, req, res, [req.body.titulo, req.body.link, req.body.id], "", modelImagem, false);
}

const testeImagem = function (req, res){
    var c = new Client();
    c.on('ready', function() {
      c.put(req.body.imagem, 'teste.jpg', function(err) {
        if (err) throw err;
        c.end();
      });
    });
    // connect to localhost:21 as anonymous
    c.connect({
        host: "ftp.vulpis.tech",
        user: "u709009684.ftptvgaspar",
        password: "ftptvgaspar"
    });
}
/* end-Services */

module.exports = {
    createImagem,
    getAllImagens,
    updateImagem,
    testeImagem
};
