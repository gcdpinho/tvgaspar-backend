const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const usuario = require('./routes/usuario.js')(router);
const tag = require('./routes/tag.js')(router);
const noticia = require('./routes/noticia.js')(router);
const imagem = require('./routes/imagem.js')(router);
const video = require('./routes/video.js')(router);
const categoria = require('./routes/categoria.js')(router);
const imagemTag = require('./routes/imagemTag.js')(router);
const videoTag = require('./routes/videoTag.js')(router);
const publicidade = require('./routes/publicidade.js')(router);
app.use('/', router);

app.listen(process.env.PORT || 3000);

console.log("APP RUN!")