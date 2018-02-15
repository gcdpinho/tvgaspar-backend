/* Queries */
const categoria = {
    insert: "INSERT INTO categoria (titulo, texto, cor) VALUES (?, ?, ?)",
    update: "UPDATE categoria SET titulo = ?, texto = ?, cor = ? WHERE id = ?",
    selectAll: "SELECT * FROM categoria",
    deleteById: "DELETE FROM categoria WHERE id = ?"
}

const imagem = {
    insert: "INSERT INTO imagem (titulo, link) VALUES (?, ?)",
    update: "UPDATE imagem SET titulo = ? WHERE id = ?",
    selectAll: "SELECT * FROM imagem",
    deleteById: "DELETE FROM imagem WHERE id = ?"
}

const imagemTag = {
    insert: "INSERT INTO imagemTag (idImagem, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM imagemTag"
}

const noticia = {
    insert: "INSERT INTO noticia (manchete, subManchete, texto, autor, dtCadastro, flgAtivo, aprovacao, idUsuario) VALUES (?, ?, ?, ?, STR_TO_DATE(?, '%d/%m/%Y %H:%i'), ?, ?, ?)",
    update: "UPDATE noticia SET manchete = ?, subManchete = ?, texto = ?, autor = ?, dtCadastro = STR_TO_DATE(?, '%d/%m/%Y %H:%i') WHERE id = ?",
    selectAll: "SELECT * FROM noticia WHERE flgAtivo = 1",
    updateAprovacao: "UPDATE noticia SET aprovacao = ? WHERE id = ?",
    deleteById: "UPDATE noticia SET flgAtivo = 0 WHERE id = ?"
}

const noticiaCategoria = {
    insert: "INSERT INTO noticiaCategoria (idNoticia, idCategoria) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaCategoria"
}

const noticiaImagem = {
    insert: "INSERT INTO noticiaImagem (idNoticia, idImagem) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaImagem"
}

const noticiaTag = {
    insert: "INSERT INTO noticiaTag (idNoticia, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaTag"
}

const noticiaVideo = {
    insert: "INSERT INTO noticiaVideo (idNoticia, idVideo) VALUES (?, ?)",
    selectAll: "SELECT * FROM noticiaVideo"
}

const publicidade = {
    insert: "INSERT INTO publicidade (titulo, tipo, texto, link, flgAtivo, idImagem) VALUES (?, ?, ?, ?, ?, ?)",
    update: "UPDATE publicidade SET titulo = ?, tipo = ?, texto = ?, link = ? WHERE id = ?",
    selectAll: "SELECT * FROM publicidade WHERE flgAtivo = 1",
    deleteById: "UPDATE publicidade SET flgAtivo = 0 WHERE id = ?"
}

const tag = {
    insert: "INSERT INTO tag (titulo) VALUES (?)",
    update: "UPDATE tag SET titulo = ? WHERE id = ?",
    selectAll: "SELECT * FROM tag",
    deleteById: "DELETE FROM tag WHERE id = ?"
}

const usuario = {
    insert: "INSERT INTO usuario (nome, login, senha, email, isAdm) VALUES (?, ?, ?, ?)",
    updateToken: "UPDATE usuario SET token = ? WHERE login = ?",
    selectAll: "SELECT nome, login, email, isAdm FROM usuario",
    selectByLogin: "SELECT * FROM usuario WHERE login = ?",
    selectByToken: "SELECT id, nome, email, isAdm FROM usuario WHERE token = ?"
}

const video = {
    insert: "INSERT INTO video (titulo, texto, link) VALUES (?, ?, ?)",
    update: "UPDATE video SET titulo = ?, texto = ?, link = ? WHERE id = ?",
    selectAll: "SELECT * FROM video",
    deleteById: "DELETE FROM video WHERE id = ?"
}

const videoTag = {
    insert: "INSERT INTO videoTag (idVideo, idTag) VALUES (?, ?)",
    selectAll: "SELECT * FROM videoTag"
}

const insercao = {
    insert: "INSERT INTO insercao (campo, dtCadastro) VALUES (?, STR_TO_DATE(?, '%d/%m/%Y %H:%i'))",
    selectAll: "SELECT * FROM insercao",
    select: "SELECT * FROM insercao WHERE campo = ?"
}
/* end-Queries */

module.exports = {
    categoria,
    imagem,
    imagemTag,
    noticia,
    noticiaCategoria,
    noticiaImagem,
    noticiaTag,
    noticiaVideo,
    publicidade,
    tag,
    usuario,
    video,
    videoTag,
    insercao
}