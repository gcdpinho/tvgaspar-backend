const mysql = require('mysql');
const config = require('./../config.js');
const jwt = require('jsonwebtoken');
const modelTag = require('./../model/tag.js');

/* Queries */
const query = {
    insert: "INSERT INTO tag (titulo) VALUES (?)",
    update: "UPDATE tag SET titulo = ? WHERE id = ?",
    selectAll: "SELECT * FROM tag"
}
/* end-Queries */
/* Services */
const createtag = function (req, res){
    service(query.insert, req, res, [req.body.titulo], "");
}

const getAlltags = function (req, res){
    service(query.selectAll, req, res, "", "default");
}

const updateTag = function (req, res){
    service(query.update, req, res, [req.body.titulo, req.body.id], "");
}
/* end-Services */
/* Default functions  */
var callbackDefault = function (res, results) {
    var arrTag = [];
    if (!isEmptyObject(results)) {
        results.forEach(function (element, index) {
            arrTag.push(new modelTag(element));
        });
    }

    res.json(arrTag);
}

const service = function (query, req, res, data, callback) {
    const connection = mysql.createConnection(config.db);

    connection.query(query, data, function (error, results, fields) {
        if (error)
            res.json(error);
        else {
            switch (callback) {
                case "":
                    res.json(results);
                    break;
                case "default":
                    callbackDefault(res, results);
                    break;
                default:
                    callback(results)
                    break;
            }
        }
        connection.end();
    });
}
/* end-Default functions*/
/* Help Functions  */
/* end-Help Functions  */

module.exports = {
    createtag,
    getAlltags,
    updateTag
};
