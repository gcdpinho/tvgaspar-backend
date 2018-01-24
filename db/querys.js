const cadastro_categoria = {
    update: "UPDATE produto_categoria SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO produto_categoria (nome_categoria, sit) VALUES (?, ?)"
}

const cadastro_categoria_alterar = {
    update: "UPDATE produto_categoria SET nome_categoria = ? WHERE id = ?",
    select: "SELECT * FROM produto_categoria WHERE sit = 1 AND id = ? ORDER BY nome_categoria"
}

const cadastro_video = {
    update: "UPDATE video SET sit = 2 WHERE id = ?",
    select: "SELECT  * FROM video WHERE sit = 1"
}

const cadastro_video_adicionar = {
    update: "UPDATE informativo SET destaque = '' WHERE destaque = ?",
    insert: "INSERT INTO video (id_video_pai, nm_video, ds_video, link_video, id_categoria, destaque, destaque_tipo, imagem, dt_cadastro, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const cadastro_video_alterar = {
    update_informativo: "UPDATE informativo SET destaque = '' WHERE destaque = ?",
    update_video: "UPDATE video SET link_video = ?, id_categoria = ?, nm_video = ?, ds_video = ?, destaque = ?, destaque_tipo = ?, id_video_pai = ?, ds_video = ? WHERE id = ?",
    select: "SELECT * FROM video WHERE sit = 1 AND id = ? ORDER BY id DESC"
}

const cadastro_video_alterar_imagem = {
    update: "UPDATE video SET imagem = ? WHERE id = ?"
}

const cadastro_video_exibir = {
    select: "SELECT * FROM video WHERE sit = 1 AND id = ? ORDER BY id DESC"
}

const enquete = {
    update: "UPDATE enquete_pergunta SET sit = 2 WHERE id = ?",
    select: "INSERT INTO enquete_pergunta (ds_pergunta, dt_cadastro, sit) VALUES (?, ?, ?)"
}

const publicidade_topo = {
    update: "UPDATE publicidade_topo SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO publicidade_topo (pagina, nome_arquivo, link, link_para_banner, vinheta, imagem, data_cadastro, data_inicio, data_fim, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)"
}

const publicidade_topo_alterar = {
    upadte: "UPDATE publicidade_topo SET pagina = ?, nome_arquivo = ?, link = ?, vinheta = ?, data_inicio = ?, data_fim = ?, link_para_banner = ?  WHERE id = ?",
    select: "SELECT * FROM publicidade_topo WHERE sit = 1 AND id = ? ORDER BY id DESC"
}

const sorteio_alterar_cadastro = {
    update: "UPDATE sorteio_cadastro SET titulo = ?, ds_sorteio = ?, sit = ? WHERE id_sorteio = ?",
    select: "SELECT * FROM sorteio_cadastro WHERE sit = 1 AND id_sorteio = ?"
}

const sorteio_alterar_imagem = {
    upate: "UPDATE sorteio_cadastro SET  imagem = ? WHERE id_sorteio = ?",
    insert: "INSERT INTO sorteio_cadastro (titulo, imagem, ds_sorteio, sit) VALUES (?, ?, ?, ?)"
}

const enquete_resposta = {
    update: "UPDATE enquete_resposta SET sit = 2 WHERE id = ?",
    insert_resposta: "INSERT INTO enquete_resposta (id_pergunta, ds_resposta, dt_cadastro, sit) VALUES (?, ?, ?, ?)",
    insert_voto: "INSERT INTO enquete_voto (id_resposta, ip, data_cadastro, sit) VALUES (?, ?, ?, ?)",
    select: "SELECT * FROM enquete_resposta WHERE sit = 1 AND id_pergunta = ?"
}

const exp_excel = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND id_sorteio = ? ORDER BY id_sorteio DESC"
}

const informativo = {
    upadte_sit: "UPDATE informativo SET sit = 2 WHERE id = ?",
    update_destaque: "UPDATE informativo SET destaque = '' WHERE destaque = ?",
    insert: "INSERT INTO informativo (nome, noticia_rss, id_categoria, link, destaque, destaque_tipo, sit, data, rss) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    select: "SELECT * FROM informativo i, Produto_categoria c WHERE i.sit = 1 AND i.id_categoria = c.id "
}

const informativo_alterar = {
    update_destaque: "UPDATE informativo SET destaque = '' WHERE destaque = ?",
    update_all: "UPDATE informativo SET nome = ?, noticia_rss = ?, id_categoria = ?, destaque = ?, destaque_tipo = ?, sit = ?, rss = ? WHERE id = ?",
    select: "SELECT * FROM informativo  i, Produto_categoria c WHERE i.sit = 1 AND i.id_categoria = c.id AND i.id = ? ORDER BY i.id DESC"
}

const informativo_alterar_imagem = {
    update: "UPDATE informativo SET link = ? WHERE id = ?"
}

const informativo_detalhe = {
    update: "UPDATE informativo_detalhe SET sit = 2 WHERE cd_informativo = ?",
    insert: "INSERT INTO informativo_detalhe (cd_informativo, texto, data, sit) VALUES (?, ?, ?, ?)",
    select: "SELECT * FROM informativo_detalhe WHERE sit = 1 AND cd_informativo = ? ORDER BY id"
}

const publicidade_centro = {
    update: "UPDATE publicidade_centro SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO publicidade_centro (pagina, videos, nome_arquivo, link, link_para_banner, vinheta, imagem, data_cadastro, data_inicio, data_fim, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)"
}

const publicidade_centro_alterar = {
    update: "UPDATE publicidade_centro SET pagina = ?, nome_arquivo = ?, link = ?, vinheta = ?, data_inicio = ?, data_fim = ?, link_para_banner = ? WHERE id = ?",
    select: "SELECT * FROM publicidade_centro WHERE sit = 1 AND id = ? ORDER BY id DESC"
}

const publicidade_lateral = {
    update: "UPDATE publicidade_lateral SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO publicidade_lateral (pagina, nome_arquivo, link, link_para_banner, vinheta, imagem, data_cadastro, data_inicio, data_fim, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)"
}

const publicidade_lateral_alterar = {
    update: "UPDATE publicidade_lateral SET pagina = ?, nome_arquivo = ?, link = ?, vinheta = ?, data_inicio = ?, data_fim = ?, link_para_banner = ? where id = ?",
    select: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND id = ? ORDER BY id DESC"
}

const publicidade_popup = {
    update: "UPDATE publicidade_popup SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO publicidade_popup (pagina, nome_arquivo, link, link_para_banner, vinheta, imagem, data_cadastro, data_inicio, data_fim, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)"
}

const arvore_premios = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    insert: "INSERT INTO newsletter (nome, email, data, sit) VALUES (?, ?, ?, ?)",
    select_pub_top: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_produto_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_produto_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const clinicauniao_foradoar = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ?",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (2, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const crianca = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ? and id_sorteio = 5",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (8, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const floriculturagi = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ?",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (3, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const mae_foradoar = {
    select: "SELECT * FROM sorteio WHERE  sit = 1 AND email = ? AND id_sorteio = 5",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (5, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const namorados = {
    select: "SELECT * FROM sorteio WHERE  sit = 1 AND email = ? AND id_sorteio = 6",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (6, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const natalpremiado_foradoar = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ?",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const pai = {
    select: "SELECT * FROM sorteio WHERE  sit = 1 AND email = ? AND id_sorteio = 5",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (7, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const pascoa = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ?",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (4, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const ajaxCadastrarPromocao = {
    select: "SELECT * FROM sorteio WHERE sit = 1 AND email = ? AND id_sorteio = ?",
    insert: "INSERT INTO sorteio (id_sorteio, ip_participante, nome, telefone, bairro, cidade, estado, email, data_cadastro, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
}

const buscar = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_noticias: "SELECT id, nome, ds, tipo, d FROM ((SELECT DISTINCT v.id AS id, v.nm_video AS nome, v.ds_video AS ds, video AS tipo, v.dt_cadastro AS d FROM video v WHERE v.nm_video LIKE %?% AND v.sit = 1 ORDER BY v.id DESC LIMIT 20) UNION (SELECT DISTINCT n.id AS id, n.nome AS nome, null AS ds, noticia AS tipo, n.data AS d FROM informativo n WHERE n.nome LIKE %?% AND n.sit = 1 ORDER BY n.id DESC LIMIT 20)) teste ORDER BY teste.d DESC LIMIT 20",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const buscar1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_noticias: "SELECT id, nome, ds, tipo, d FROM ((SELECT DISTINCT v.id AS id, v.nm_video AS nome, v.ds_video AS ds, video AS tipo, v.dt_cadastro AS d FROM video v WHERE v.nm_video LIKE %?% AND v.sit = 1 ORDER BY v.id DESC LIMIT 20) UNION (SELECT DISTINCT n.id AS id, n.nome AS nome, null AS ds, noticia AS tipo, n.data AS d FROM informativo n WHERE n.nome LIKE %?% AND n.sit = 1 ORDER BY n.id DESC LIMIT 20)) teste ORDER BY teste.d DESC LIMIT 20",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_avenida = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_avenida', 1, 1, ?)",
    select_visitas: "SELECT sum(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_avenida'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_avenida1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_avenida', 1, 1, ?)",
    select_visitas: "SELECT sum(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_avenida'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_debate2012 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'eleicao2012' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE b.sit = 1 AND pagina = 'eleicao2012' and data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_all: "SELECT  v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '11' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 9",
    select_pub_lateral: "SELECT * FROM publicidade_lateral b WHERE b.sit = 1 AND pagina = 'eleicao2012' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_gasparnews = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '31' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 9",
    select_popup: "SELECT * FROM popup WHERE popup = 6 OR popup = 5 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_gasparnews1 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '31' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 9",
    select_popup: "SELECT * FROM popup WHERE popup = 6 OR popup = 5 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'gaspar_news' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_ilhota = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('camera_ilhota', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'camera_ilhota'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_ilhota_balsa = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'ilhota_balsa' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('ilhota_balsa', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'ilhota_balsa'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'ilhota_balsa' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'ilhota_balsa' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_ilhota1 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('camera_ilhota', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'camera_ilhota'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_ilhota' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_morro_parapente = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_ponte', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_ponte'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_nereu_ramos = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_nereu' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_nereu', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_nereu'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_nereu' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_nereu' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_saojose_just = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE b.sit = 1 AND pagina = 'camera_saojose' and data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral b WHERE b.sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_saojose_just1 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE b.sit = 1 AND pagina = 'camera_saojose' and data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral b WHERE b.sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_nereu_ramos_310 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_nereu_310' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_nereu_310', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_nereu_310'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_nereu_310' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_nereu_310' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_saojose = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE b.sit = 1 AND pagina = 'camera_saojose' and data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral b WHERE b.sit = 1 AND pagina = 'camera_saojose' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_programa_versatil = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_versatil' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '40' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 9",
    select_popup: "SELECT * FROM popup WHERE popup = 7 OR popup = 8 ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_versatil', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_versatil'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_versatil' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_versatil' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_esporteaovivo1 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '6' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 10",
    select_popup: "SELECT * FROM popup WHERE popup = 1 OR popup = 2 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_esporteaovivo = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '6' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 10",
    select_popup: "SELECT * FROM popup WHERE popup = 1 OR popup = 2 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_nereu_ramos_viaduto = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'cam_viaduto_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_viaduto_avenida', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_viaduto_avenida'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'cam_viaduto_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'cam_viaduto_avenida' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_praca = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'cam_praca' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_praca', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_praca'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'cam_praca' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'cam_praca' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_ponte_vale = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_ponte_vale' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('camera_ponte_vale', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'camera_ponte_vale'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_ponte_vale' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_ponte_vale' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_ponte_hercilio_deeke = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('camera_ponte', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'camera_ponte'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_ponte' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_noticia = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_categoria = '6' AND v.id_video_pai = '' ORDER BY v.id DESC LIMIT 9",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE b.sit = 1 AND pagina = 'camera_esporteaovivo' and data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral b WHERE b.sit = 1 AND pagina = 'camera_esporteaovivo' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_nereu_ramos_8001 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_nereu_outra' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_nereu_outra', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_nereu_outra'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'cam_nereu_outra' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_nereu_outra' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const camera_nereu_ramos_345 = {
    select_pub_topo:  "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'camera_nereu_345' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    insert: "INSERT INTO visitas (conteudo, num, sit, data) VALUES ('cam_nereu_345', 1, 1, ?)",
    select_visitas: "SELECT SUM(num) visitas FROM visitas WHERE sit = 1 AND conteudo = 'cam_nereu_345'",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'cam_nereu_345' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'camera_nereu_345' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const script_busca_videos ={
    select: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ORDER BY v.destaque, v.id DESC",
    select_natal: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' AND v.id_categoria = 46 ORDER BY rand()"
}

const script_busca_videos_rand = {
    select: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id ORDER BY rand() DESC LIMIT 7"
}

const script_menu = {
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria"
}

const script_menu1 = {
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria"
}

const sorteio = {
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.id DESC LIMIT 8",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ?",
    select_sorteio: "SELECT * FROM sorteio_cadastro WHERE sit = 1 AND id_sorteio = ? ORDER BY id_sorteio DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const vagas_gaspar_emprego = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_area: "SELECT DISTINCT ar.id_area, ar.ds_area, COUNT(*) qtd_area FROM vagas v, anunciante a, cidade c, ramo r, area ar WHERE v.id_area = ar.id_area AND r.id_ramo = v.id_ramo AND v.id_cidade = c.id_cidade AND v.id_anunciante = a.id_anunciante AND v.sit in (1, 2) GROUP BY ar.ds_area",
    select_rec: "SELECT c.ds_cidade, a.*, v.*, (SELECT DATEDIFF(CURDATE(), MAX(vc.data)) FROM vagas_candidato vc WHERE vc.id_vaga = v.id_vaga) AS data_ultimo_inscritos, (SELECT MAX(vc.data) FROM vagas_candidato vc WHERE vc.id_vaga = v.id_vaga) AS data_ultimo FROM vagas v, anunciante a, cidade c WHERE v.id_cidade = c.id_cidade AND v.id_anunciante = a.id_anunciante AND v.sit in (1 , 2) LIMIT 6 UNION SELECT c.ds_cidade, a.*, v.*, (SELECT DATEDIFF(CURDATE(), MAX(vc.data)) FROM vagas_candidato vc WHERE vc.id_vaga = v.id_vaga) AS data_ultimo_inscritos, (SELECT MAX(vc.data) FROM vagas_candidato vc WHERE vc.id_vaga = v.id_vaga) AS data_ultimo FROM vagas v, anunciante a, cidade c WHERE v.id_cidade = c.id_cidade AND v.id_anunciante = a.id_anunciante AND v.sit in (1, 2) AND v.sit in ( 1,2) AND NOT EXISTS (SELECT * FROM vagas_candidato v2 WHERE v.id_vaga = v2.id_vaga) ORDER BY rand()",
    select_cad: "SELECT c.ds_cidade, a.*, v.*, (SELECT MAX(vc.data) FROM vagas_candidato vc WHERE vc.id_vaga = v.id_vaga) AS data_ultimo FROM vagas v, anunciante a, cidade c WHERE v.id_cidade = c.id_cidade AND v.id_anunciante = a.id_anunciante AND v.sit in (1, 2) AND (v.id_anunciante != 170 AND v.id_anunciante != 180) AND v.id_cidade = 1 ORDER BY v.id_vaga DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const vagas_gaspar_emprego1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const videos = {
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.id DESC LIMIT 8",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ?",
    select_video1: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ? ORDER BY v.id DESC LIMITE ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const videos_detalhe = {
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id ? ORDER BY v.id DESC LIMIT 1",
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.id DESC LIMIT 8",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = ? ORDER BY v.id DESC",
    select_video1: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = ? AND v.id_video_pai != '' ORDER BY v.nm_video",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_coment: "SELECT * FROM comentario WHERE d.sit = 1 AND d.pagina = 2 AND d.id_reportagem = ? ORDER BY d.id DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const videos = {
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.id DESC LIMIT 8",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = ''",
    select_video1: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ? ORDER BY v.id DESC LIMITE ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const videos1 = {
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.id DESC LIMIT 8",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = ''",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",
    select_video1: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ? ORDER BY v.id DESC LIMITE ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const contato = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const contato1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const enquete_all = {
    select_pergunta: "SELECT * FROM enquete_pergunta p, enquete_resposta r WHERE p.sit = 1 r.sit = 1 ORDER BY p.id DESC LIMIT 1",
    select_voto: "SELECT * FROM enquete_voto WHERE ip = ? AND data_cadastro LIKE '%?%'",
    insert: "INSERT INTO enquete_voto (id_resposta, ip, data_cadastro, sit) VALUES (?, ?, ?, ?)",
    select_all_votos: "SELECT DISTINCT v.id_resposta, v.ip, v.sit FROM enquete_pergunta p, enquete_resposta r, enquete_voto v WHERE p.sit = 1 AND r.sit = 1 AND v.sit = 1 AND p.id = r.id_pergunta and r.id = v.id_resposta AND p.id = ?",
    select_resposta: "SELECT * FROM enquete_resposta WHERE sit = 1 AND r.id_pergunta = ?",
    select_enquete:  "SELECT DISTINCT r.ds_resposta, v.id_resposta, COUNT(DISTINCT ip) total FROM enquete_pergunta p, enquete_resposta r, enquete_voto v WHERE p.sit = 1 AND r.sit = 1 AND v.sit = 1 AND p.id = r.id_pergunta AND r.id = v.id_resposta AND p.id = ? GROUP BY v.id_resposta",
    select_pesquisa: "SELECT * FROM enquete_voto WHERE ip = ? AND data_cadastro LIKE '%?%'",
    select_enquete_pergunta_resposta: "SELECT * FROM enquete_pergunta p, enquete_resposta r WHERE p.sit = 1 AND r.sit = 1 AND p.id = r.id_pergunta AND r.id_pergunta = ?"
}

const enquete_all1 = {
    select_pergunta: "SELECT * FROM enquete_pergunta p, enquete_resposta r WHERE p.sit = 1 r.sit = 1 ORDER BY p.id DESC LIMIT 1",
    select_all_votos: "SELECT DISTINCT v.id_resposta, v.ip, v.sit FROM enquete_pergunta p, enquete_resposta r, enquete_voto v WHERE p.sit = 1 AND r.sit = 1 AND v.sit = 1 AND p.id = r.id_pergunta and r.id = v.id_resposta AND p.id = ?",
    select_resposta: "SELECT * FROM enquete_resposta WHERE sit = 1 AND r.id_pergunta = ?",
    select_enquete:  "SELECT r.ds_resposta, v.id_resposta, COUNT(*) total FROM enquete_pergunta p, enquete_resposta r, enquete_voto v WHERE p.sit = 1 AND r.sit = 1 AND v.sit = 1 AND p.id = r.id_pergunta AND r.id = v.id_resposta AND p.id = ? GROUP BY v.id_resposta",
    select_enquete_pergunta_resposta: "SELECT * FROM enquete_pergunta p, enquete_resposta r WHERE p.sit = 1 AND r.sit = 1 AND p.id = r.id_pergunta AND r.id_pergunta = ?"
}

const eventos = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup WHERE popup = 3 OR popup = 4 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const eventos1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_popup1: "SELECT * FROM popup WHERE popup = 3 OR popup = 4 ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_sorteio: "SELECT * FROM sorteio_cadastro WHERE sit = 1 ORDER BY id_sorteio DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit=1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_noticias: "SELECT DISTINCT video AS tipo, v.nm_video AS titulo, v.dt_cadastro AS data_cadastro, v.destaque AS destaque, v.destaque_tipo AS destaque_tipo, v.link_video AS imagem, v.id codigo FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' AND v.`destaque` > 0 UNION SELECT DISTINCT noticia AS tipo, i.nome AS titulo, i.data AS data_cadastro, i.destaque AS destaque, i.destaque_tipo AS destaque_tipo, i.link AS imagem, i.id AS codigo FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo AND i.`destaque` > 0 ORDER BY destaque, codigo DESC",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index_backup = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit=1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index_manifestacao = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index_mobile = {
    select_video: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id AND v.id_video_pai = '' ORDER BY v.destaque, v.id DESC LIMIT 1"
}

const index_natal = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index_natal2014 = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const index_pascoa1 = {
    select_popup: "SELECT * FROM popup ORDER BY id DESC LIMIT 1",  
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, i.link FROM informativo_detalhe d, informativo i WHERE d.sit = 1 AND i.sit = 1 AND i.id = d.cd_informativo ORDER BY i.destaque ASC, i.id DESC LIMIT 10",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_popup: "SELECT * FROM publicidade_popup WHERE sit = 1 AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_video: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, video v WHERE p.sit = 1 AND v.sit = 1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_informativo1: "SELECT DISTINCT p.nome_categoria, p.id FROM produto_categoria p, informativo v WHERE p.sit=1 AND v.id_categoria = p.id ORDER BY p.nome_categoria",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const indoor = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const newsletter = {
    select_noticias: "SELECT id, nome, ds, tipo,d FROM ((SELECT DISTINCT v.id as id, v.nm_video AS nome, v.ds_video AS ds, video AS tipo, v.dt_cadastro AS d FROM video v WHERE v.nm_video LIKE '%?%' AND v.sit = 1 AND v.dt_cadastro BETWEEN '? 00:00:00' AND '? 23:59:59' ORDER BY v.id DESC LIMIT 20) UNION (SELECT DISTINCT n.id AS id, n.nome AS nome, null AS ds, noticia AS tipo, n.data AS d FROM informativo n WHERE n.nome LIKE '%?%' AND n.sit = 1 AND n.data BETWEEN ? AND ? ORDER BY n.id DESC LIMIT 20)) teste ORDER BY teste.d DESC LIMIT 20",
}

const newsletter_enviar = {
    select: "SELECT DISTINCT email FROM newsletter WHERE sit = 1"
}

const newsletter_remover = {
    update: "UPDATE newsletter SET sit = 3 WHERE email = ?"
}

const noticias = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC LIMIT ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const noticias_dethalhe = {
    select_noticia:  "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, d.texto FROM informativo_detalhe d, informativo i, produto_categoria e where d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC LIMIT 1",
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_comentario: "SELECT * FROM comentario WHERE sit = 1 AND pagina = 1 AND id_reportagem = ? ORDER BY id DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"    
}

const noticias1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC",
    select_informativo1: "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC LIMIT ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const noticias1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_informativo: "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC",
    select_informativo1: "SELECT DISTINCT i.nome, i.id, i.data, e.nome_categoria, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo ? ORDER BY i.id DESC LIMIT ?, ?",
    select_pub_centro: "SELECT * FROM publicidade_centro WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const publicidade_lateral_all = {
    update: "UPDATE publicidade_lateral SET sit = 2 WHERE id = ?",
    insert: "INSERT INTO publicidade_lateral (pagina, nome_arquivo, link, link_para_banner, vinheta, imagem, data_cadastro, data_inicio, data_fim, sit) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1)",
    select_arquivos: "SELECT * FROM arquivos WHERE sit = 1 ORDER BY nome",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const quem = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const quem1 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const quem2 = {
    select_pub_topo: "SELECT * FROM publicidade_topo WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY id DESC LIMIT 1",
    select_pub_lateral: "SELECT * FROM publicidade_lateral WHERE sit = 1 AND pagina = 'index' AND data_fim >= ? AND data_inicio <= ? ORDER BY rand() DESC"
}

const rss = {
    select: "SELECT DISTINCT i.noticia_rss, i.nome, i.id, i.data, e.nome_categoria, d.texto, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo AND i.rss = 1 order by i.data DESC LIMIT 10"
}

const rss_antigo = {
    select: "SELECT DISTINCT i.noticia_rss, i.nome, i.id, i.data, e.nome_categoria, d.texto, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo AND i.rss = 1 ORDER BY i.id DESC LIMIT 10"
}

const rss1 = {
    select: "SELECT DISTINCT i.noticia_rss, i.nome, i.id, i.data, e.nome_categoria, d.texto, i.link FROM informativo_detalhe d, informativo i, produto_categoria e WHERE d.sit = 1 AND i.sit = 1 AND i.id_categoria = e.id AND i.id = d.cd_informativo AND i.rss = 1 ORDER BY i.id DESC LIMIT 10"
}

const script_atualiza_div_video = {
    select: "SELECT v.*, c.nome_categoria FROM video v, produto_categoria c WHERE v.sit = 1 AND v.id_categoria = c.id ? ORDER BY v.id DESC LIMIT 1"
}