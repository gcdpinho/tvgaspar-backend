const functions = require('./../functions.js');
const modelImagemTag = require('./../model/imagemTag.js');

/* Queries */
const query = {
    insert: "INSERT INTO imagemTag (idImagem, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM imagemTag"
}
/* end-Queries */
/* Services */
const createImagemTag = function (req, res){
    functions.service(query.insert, req, res, req.body.data, "", modelImagemTag);
}

const getAllImagensTags = function (req, res){
    functions.service(query.selectAll, req, res, "", "default", modelImagemTag);
}

/* end-Services */

module.exports = {
    createImagemTag,
    getAllImagensTags
};
