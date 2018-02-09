const functions = require('./../functions.js');
const modelVideoTag = require('./../model/videoTag.js');
const query = require('./../dao/query.js');

/* Services */
const createVideoTag = function (req, res){
    functions.service(query.videoTag.insert, req, res, req.body.data, "", modelVideoTag, true);
}

const getAllVideosTags = function (req, res){
    functions.service(query.videoTag.selectAll, req, res, "", "default", modelVideoTag, false);
}

/* end-Services */

module.exports = {
    createVideoTag,
    getAllVideosTags
};
