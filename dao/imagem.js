const functions = require('./../functions.js');
const modelImagem = require('./../model/imagem.js');
const jsftp = require("jsftp");


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
    const ftp = new jsftp({
        host: "ftp.vulpis.tech",
        user: "u709009684.ftptvgaspar",
        pass:  "ftptvgaspar",
        createSocket: ({port, host}, firstAction) => {
            return SocksClient.createConnection({
              proxy: {
                ipaddress: '159.203.75.200',
                port: 1080,
                type: 5
              },
        
              command: 'connect',
        
              destination: {
                host,
                port
              }
            })
          }
      });

      ftp.put(req.body.imagem, "file.jpg", err => {
        if (!err) {
          console.log("File transferred successfully!");
        }
      });
}
/* end-Services */

module.exports = {
    createImagem,
    getAllImagens,
    updateImagem,
    testeImagem
};
