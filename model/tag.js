/* CONSTRUCTOR */
var tag = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
}
/* GETTERS */
tag.prototype.getId = function (){
    return this.id;
}
tag.prototype.getTitulo = function (){
    return this.titulo;
}

/* SETTERS */
tag.prototype.setId = function (id){
    this.id = id;
}
tag.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}

module.exports = tag;