const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config.js');
const jwt = require('jsonwebtoken');
router.use(function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['token'];

    if (token) {
        jwt.verify(token, config.criptografia.secret, function (error, decoded) {
            if (error)
                return res.json({
                    sucess: false,
                    message: "Falha ao autenticar o token."
                });
            else {
                req.decoded = decoded;
                next();
            }
        });
    } else
        return res.status(403).send({
            sucess: false,
            message: "Requisição sem token."
        });
});
const bodyParser = require('body-parser');
const usuario = require('./routes/usuario.js')(router);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/', router);
app.listen(process.env.PORT || 3000);

console.log("APP RUN!")