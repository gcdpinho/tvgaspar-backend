/* CONSTRUCTOR */
var categoria = function(data){
    this.id = data.id;
    this.titulo = data.titulo;
    this.texto = data.texto;
    this.cor = data.cor;
}

/* GETTERS */
categora.prototype.getId = function (){
    return this.id;
}
categora.prototype.getTitulo = function (){
    return this.titulo;
}
categora.prototype.getTexto = function (){
    return this.texto;
}
categora.prototype.getCor = function (){
    return this.cor;
}

/* SETTERS */
categoria.prototype.setId = function (id){
    this.id = id;
}
categoria.prototype.setTitulo = function (titulo){
    this.titulo = titulo;
}
categoria.prototype.setTexto = function (texto){
    this.texto = texto;
}
categoria.prototype.setCor = function (cor){
    this.cor = cor;
}

module.exports = categoria;