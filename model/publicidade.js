/* CONSTRUCTOR */
var publicidade = function(data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.tipo = data.tipo;
    this.texto = data.texto;
    this.link = data.link;
    this.flgAtivo = data.flgAtivo;
    this.idImagem = data.idImagem;
}

/* GETTERS */
publicidade.prototype.getId = function (){
    return this.id;
}
publicidade.prototype.getTitulo = function (){
    return this.titulo;
}
publicidade.prototype.getTipo = function (){
    return this.tipo;
}
publicidade.prototype.getTexto = function (){
    return this.texto;
}
publicidade.prototype.getLink = function (){
    return this.link;
}
publicidade.prototype.getFlgAtivo = function (){
    return this.flgAtivo;
}
publicidade.prototype.getIdImagem = function (){
    return this.idImagem;
}

/* SETTERS */
publicidade.prototype.setId = function (id){
    this.id = id;
}
publicidade.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
publicidade.prototype.setTipo = function (tipo){
    this.tipo = tipo;
}
publicidade.prototype.setTexto = function (texto){
    this.texto = texto;
}
publicidade.prototype.setLink = function (link){
    this.link = link;
}
publicidade.prototype.setFlgAtivo = function (flgAtivo){
    this.flgAtivo = flgAtivo;
}
publicidade.prototype.setIdImagem = function (idImagem){
    this.idImagem = idImagem;
}

module.exports = publicidade;