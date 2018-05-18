module.exports = function (router) {
    require('./routes/site.js')(router);
    require('./routes/usuario.js')(router);
    require('./routes/tag.js')(router);
    require('./routes/noticia.js')(router);
    require('./routes/imagem.js')(router);
    require('./routes/video.js')(router);
    require('./routes/categoria.js')(router);
    require('./routes/imagemTag.js')(router);
    require('./routes/videoTag.js')(router);
    require('./routes/publicidade.js')(router);
    require('./routes/noticiaTag.js')(router);
    require('./routes/noticiaCategoria.js')(router);
    require('./routes/noticiaVideo.js')(router);
    require('./routes/noticiaImagem.js')(router);
}