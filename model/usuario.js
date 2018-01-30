/* CONSTRUCTOR */
var usuario = function(data){
    this.id = data.id;
    this.nome = data.nome;
    this.login = data.login;
    this.senha = data.senha;
    this.email = data.email;
    this.isAdm = data.isAdm;
    this.token = data.token;
}

/* GETTERS */
usuario.prototype.getId = function (){
    return this.id;
}
usuario.prototype.getNome = function (){
    return this.nome;
}
usuario.prototype.getLogin = function (){
    return this.login;
}
usuario.prototype.getSenha = function (){
    return this.senha;
}
usuario.prototype.getEmail = function (){
    return this.email;
}
usuario.prototype.getIsAdm = function (){
    return this.isAdm;
}
usuario.prototype.getToken = function (){
    return this.token;
}

/* SETTERS */
usuario.prototype.setId = function (id){
    this.id = id;
}
usuario.prototype.setNome = function (nome){
    this.nome = nome;
}
usuario.prototype.setLogin = function (login){
    this.login = login;
}
usuario.prototype.setSenha = function (senha){
    this.senha = senha;
}
usuario.prototype.setEmail = function (email){
    this.email = email;
}
usuario.prototype.setIsAdm = function (isAdm){
    this.isAdm = isAdm;
}
usuario.prototype.setToken = function (token){
    this.token = token;
}

module.exports = usuario;