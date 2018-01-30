/* CONSTRUCTOR */
var imagem = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.link = data.link;
}

/* GETTERS */
imagem.prototype.getId = function (){
    return this.id;
}
imagem.prototype.getTitulo = function (){
    return this.titulo;
}
imagem.prototype.getLink = function (){
    return this.link;
}

/* SETTERS */
imagem.prototype.setId = function (id){
    this.id = id;
}
imagem.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
imagem.prototype.setLink = function (link){
    this.link = link;
}

module.exports = imagem;