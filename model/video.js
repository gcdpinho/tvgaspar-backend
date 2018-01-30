/* CONSTRUCTOR */
var video = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.texto = data.texto;
    this.link = data.link;
}

/* GETTERS */
video.prototype.getId = function (){
    return this.id;
}
video.prototype.getTitulo = function (){
    return this.titulo;
}
video.prototype.getTexto = function (){
    return this.texto;
}
video.prototype.getLink = function (){
    return this.link;
}

/* SETTERS */
video.prototype.setId = function (id){
    this.id = id;
}
video.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
video.prototype.setTexto = function (texto){
    this.texto = texto;
}
video.prototype.setLink = function (link){
    this.link = link;
}

module.exports = video;