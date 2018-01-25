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
categora.prototype.getId = function (){
    return this.id;
}
categora.prototype.getTitulo = function (){
    return this.machete;
}
categora.prototype.getSubManchete = function (){
    return this.subManchete;
}
categora.prototype.getTexto = function (){
    return this.texto;
}
categora.prototype.getAutor = function (){
    return this.autor;
}
categora.prototype.getDtCadastro = function (){
    return this.dtCadastro;
}
categora.prototype.getFlgAtivo = function (){
    return this.flgAtivo;
}

/* SETTERS */
categoria.prototype.setId = function (id){
    this.id = id;
}
categoria.prototype.setTitulo = function (machete){
    this.machete = machete;
}
categoria.prototype.setSubManchete = function (subManchete){
    this.subManchete = subManchete;
}
categoria.prototype.setTexto = function (texto){
    this.texto = texto;
}
categoria.prototype.setAutor = function (autor){
    this.autor = autor;
}
categoria.prototype.setDtCadastro = function (dtCadastro){
    this.dtCadastro = dtCadastro;
}
categoria.prototype.setFlgAtivo = function (flgAtivo){
    this.flgAtivo = flgAtivo;
}

module.exports = noticia;