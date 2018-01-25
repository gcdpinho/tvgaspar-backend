/* CONSTRUCTOR */
var comentario = function (data){
    this.id = data.id;
    this.nome = data.nome;
    this.texto = data.texto;
    this.dtCadastro = data.dtCadastro;
}

/* GETTERS */
comentario.prototype.getId = function (){
    return this.id;
}
comentario.prototype.getNome = function (){
    return this.nome;
}
comentario.prototype.getTexto = function (){
    return this.texto;
}
comentario.prototype.getDtCadastro = function (){
    return this.dtCadastro;
}

/* SETTERS */
comentario.prototype.setId = function (id){
    this.id = id;
}
comentario.prototype.setNome = function (nome){
    this.nome = nome;
}
comentario.prototype.setTexto = function (texto){
    this.texto = texto;
}
comentario.prototype.setDtCadastro = function (dtCadastro){
    this.dtCadastro = dtCadastro;
}

module.exports = comentario;