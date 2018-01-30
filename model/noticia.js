/* CONSTRUCTOR */
var noticia = function(data){
    this.id = data.id;
    this.manchete = data.manchete;
    this.subManchete = data.subManchete;
    this.texto = data.texto;
    this.autor = data.autor;
    this.dtCadastro = data.dtCadastro;
    this.flgAtivo = data.flgAtivo;
}

/* GETTERS */
noticia.prototype.getId = function (){
    return this.id;
}
noticia.prototype.getManchete = function (){
    return this.manchete;
}
noticia.prototype.getSubManchete = function (){
    return this.subManchete;
}
noticia.prototype.getTexto = function (){
    return this.texto;
}
noticia.prototype.getAutor = function (){
    return this.autor;
}
noticia.prototype.getDtCadastro = function (){
    return this.dtCadastro;
}
noticia.prototype.getFlgAtivo = function (){
    return this.flgAtivo;
}

/* SETTERS */
noticia.prototype.setId = function (id){
    this.id = id;
}
noticia.prototype.setManchete = function (manchete){
    this.manchete = manchete;
}
noticia.prototype.setSubManchete = function (subManchete){
    this.subManchete = subManchete;
}
noticia.prototype.setTexto = function (texto){
    this.texto = texto;
}
noticia.prototype.setAutor = function (autor){
    this.autor = autor;
}
noticia.prototype.setDtCadastro = function (dtCadastro){
    this.dtCadastro = dtCadastro;
}
noticia.prototype.setFlgAtivo = function (flgAtivo){
    this.flgAtivo = flgAtivo;
}

module.exports = noticia;