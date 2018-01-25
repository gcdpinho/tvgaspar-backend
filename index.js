const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');
const teste = require('./model/categoria.js')

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
var tt = new teste({
    id: 1,
    titulo: "teste",
    link: "teste.com"
});
router.get('/clientes', (req, res) =>{
    console.log(tt);
    //list("SELECT * FROM visitas limit 1",res);
})

function list(query, res){
    const connection = mysql.createConnection({
        host: 'mysql.hostinger.com.br',
        user: 'u709009684_tvgas',
        password: 'tvgaspar12345',
        database: '	u709009684_tvgas'
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