const db = {
    host: 'sql129.main-hosting.eu',
    user: 'u709009684_tvgas',
    password: 'tvgaspar12345',
    database: 'u709009684_tvgas'
}

const criptografia = {
    alg: "aes256",
    cod: "utf8", 
    secret: "tvgasparadmin",
    tipo: "hex"
}

module.exports = {db, criptografia};