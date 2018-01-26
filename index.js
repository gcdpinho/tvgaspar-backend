const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const usuario = require('./routes/usuario.js')(router);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', router);
app.listen(process.env.PORT || 3000);
console.log("APP RUN!")