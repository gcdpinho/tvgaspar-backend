/* CONSTRUCTOR */
var publicidade = function(data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.tipo = data.tipo;
    this.texto = data.texto;
    this.link = data.link;
    this.flgAtivo = data.flgAtivo;
}

/* GETTERS */
categora.prototype.getId = function (){
    return this.id;
}
categora.prototype.getTitulo = function (){
    return this.titulo;
}
categora.prototype.getTipo = function (){
    return this.tipo;
}
categora.prototype.getTexto = function (){
    return this.texto;
}
categora.prototype.getLink = function (){
    return this.link;
}
categora.prototype.getFlgAtivo = function (){
    return this.flgAtivo;
}

/* SETTERS */
categoria.prototype.setId = function (id){
    this.id = id;
}
categoria.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
categoria.prototype.setTipo = function (tipo){
    this.tipo = tipo;
}
categoria.prototype.setTexto = function (texto){
    this.texto = texto;
}
categoria.prototype.setLink = function (link){
    this.link = link;
}
categoria.prototype.setFlgAtivo = function (flgAtivo){
    this.flgAtivo = flgAtivo;
}

module.exports = publicidade;