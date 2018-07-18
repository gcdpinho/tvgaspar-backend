'use strict';

var knex = require('knex')(require('./../config').db);
var bookshelf = require('bookshelf')(knex);

var categoria = bookshelf.Model.extend({
    tableName: 'categoria'
});

module.exports = categoria;