/* CONSTRUCTOR */
var tag = function (data){
    this.id = data.id;
    this.titulo = data.titulo;
}
/* GETTERS */
comentario.prototype.getId = function (){
    return this.id;
}
comentario.prototype.getTitulo = function (){
    return this.titulo;
}

/* SETTERS */
comentario.prototype.setId = function (id){
    this.id = id;
}
comentario.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}

module.exports = tag;