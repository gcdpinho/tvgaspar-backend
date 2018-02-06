const imagem = require('./../dao/imagem.js');
const functions = require('./../functions.js');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

module.exports = function (router) {

    router.post('/testeImagem', upload.single('fileInput'),  function(req, res) {
        console.log(req.files);
      });

    router.use(functions.verifyToken);

    router.post('/createImagem', (req, res) => {
        imagem.createImagem(req, res);
    });

    router.post('/getAllImagens', (req, res) => {
        imagem.getAllImagens(req, res);
    });

    router.post('/updateImagem', (req, res) => {
        imagem.updateImagem(req, res);
    });

    

}