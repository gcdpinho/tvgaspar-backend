const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
const teste = require('./modules.js')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({
    message: 'Funcionando!'
}));
app.use('/', router);
app.listen(process.env.PORT || port);
console.log('API funcionando!');

router.get('/clientes', (req, res) =>{
    list("SELECT * FROM visitas limit 1",res);
})

function list(query, res){
    const connection = mysql.createConnection({
        host: 'mysql01.tvgaspar.hospedagemdesites.ws',
        user: 'tvgaspar',
        password: 'inovasse',
        database: 'tvgaspar'
    });
    
    connection.query(query, function(error, results, fields){
        if(error) 
          res.json(error);
        else
          res.json(results);
        connection.end();
        console.log('executou!');
    });
}