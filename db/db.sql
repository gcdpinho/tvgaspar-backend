CREATE TABLE usuario (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    login varchar(255) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL,
    email varchar(255) UNIQUE,
    isAdm BOOLEAN DEFAULT 0,
    token varchar(255)
    PRIMARY KEY (id)
);

CREATE TABLE imagem (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(100),
    link varchar(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE publicidade (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(100),
    tipo varchar(50) NOT NULL,
    texto TEXT,
    link varchar (255),
    flgAtivo BOOLEAN DEFAULT 0, 
    idImagem int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idImagem) REFERENCES imagem (id)
);

CREATE TABLE comentario (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100),
    texto TEXT NOT NULL,
    dtCadastro DATE NOT NULL,
    idNoticia int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idNoticia) REFERENCES noticia (id)
);

CREATE TABLE categoria (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(255) NOT NULL,
    texto TEXT,
    cor varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE tag (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(255) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

CREATE TABLE video (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(255),
    texto TEXT,
    link varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE noticia (
    id int NOT NULL AUTO_INCREMENT,
    manchete varchar(255) NOT NULL,
    subManchete varchar(255),
    texto MEDIUMTEXT NOT NULL,
    autor varchar(255),
    dtCadastro DATE NOT NULL,
    flgAtivo BOOLEAN DEFAULT 0,
    aprovacao BOOLEAN NOT NULL,
    idUsuario int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuario (id)
);

CREATE TABLE noticiaCategoria (
    idNoticia int NOT NULL,
    idCategoria int NOT NULL,
    PRIMARY KEY (idNoticia, idCategoria),
    FOREIGN KEY (idNoticia) REFERENCES noticia (id),
    FOREIGN KEY (idCategoria) REFERENCES categoria (id)
);

CREATE TABLE noticiaVideo (
    idNoticia int NOT NULL,
    idVideo int NOT NULL,
    PRIMARY KEY (idNoticia, idVideo),
    FOREIGN KEY (idNoticia) REFERENCES noticia (id),
    FOREIGN KEY (idVideo) REFERENCES video (id)
);

CREATE TABLE noticiaTag (
    idNoticia int NOT NULL,
    idTag int NOT NULL,
    PRIMARY KEY (idNoticia, idTag),
    FOREIGN KEY (idNoticia) REFERENCES noticia (id),
    FOREIGN KEY (idTag) REFERENCES tag (id)
);

CREATE TABLE noticiaImagem (
    idNoticia int NOT NULL,
    idImagem int NOT NULL,
    PRIMARY KEY (idNoticia, idImagem),
    FOREIGN KEY (idNoticia) REFERENCES noticia (id),
    FOREIGN KEY (idImagem) REFERENCES imagem (id)
);

CREATE TABLE imagemTag (
    idImagem int NOT NULL,
    idTag int NOT NULL,
    PRIMARY KEY (idImagem, idTag),
    FOREIGN KEY (idImagem) REFERENCES imagem (id),
    FOREIGN KEY (idTag) REFERENCES tag (id)
);