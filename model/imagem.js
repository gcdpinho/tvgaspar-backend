/* CONSTRUCTOR */
var imagem = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.link = data.link;
}

/* GETTERS */
comentario.prototype.getId = function (){
    return this.id;
}
comentario.prototype.getTitulo = function (){
    return this.titulo;
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
comentario.prototype.setLink = function (link){
    this.link = link;
}

module.exports = imagem;