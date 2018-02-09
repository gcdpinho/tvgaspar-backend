const functions = require('./../functions.js');
const modelImagemTag = require('./../model/imagemTag.js');
const query = require('./../dao/query.js');

/* Services */
const createImagemTag = function (req, res){
    functions.service(query.imagemTag.insert, req, res, req.body.data, "", modelImagemTag, true);
}

const getAllImagensTags = function (req, res){
    functions.service(query.imagemTag.selectAll, req, res, "", "default", modelImagemTag, false);
}

/* end-Services */

module.exports = {
    createImagemTag,
    getAllImagensTags
};
