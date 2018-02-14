/* CONSTRUCTOR */
var insercao = function(data){
    this.id = data.id;
    this.campo = data.campo;
    this.dtCadastro = data.dtCadastro;
}

/* GETTERS */
insercao.prototype.getId = function (){
    return this.id;
}
insercao.prototype.getCampo = function (){
    return this.campo;
}
insercao.prototype.getDtCadastro = function (){
    return this.dtCadastro;
}

/* SETTERS */
insercao.prototype.setId = function (id){
    this.id = id;
}
insercao.prototype.setCampo = function (campo){
    this.campo = campo;
}
insercao.prototype.setDtCadastro = function (dtCadastro){
    this.dtCadastro = dtCadastro;
}


module.exports = insercao;