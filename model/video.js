/* CONSTRUCTOR */
var video = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.texto = data.texto;
    this.link = data.link;
}

/* GETTERS */
comentario.prototype.getId = function (){
    return this.id;
}
comentario.prototype.getTitulo = function (){
    return this.titulo;
}
comentario.prototype.getTexto = function (){
    return this.texto;
}
comentario.prototype.getLink = function (){
    return this.link;
}

/* SETTERS */
comentario.prototype.setId = function (id){
    this.id = id;
}
comentario.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
comentario.prototype.setTexto = function (texto){
    this.texto = texto;
}
comentario.prototype.setLink = function (link){
    this.link = link;
}

module.exports = video;