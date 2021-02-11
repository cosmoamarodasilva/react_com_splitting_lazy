const MongoClient = require ('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbnome = 'cosmoeletro';

let cliente

let db

let comentarioclientes

async function conectar() {
    cliente = await MongoClient.connect(url);
    db = cliente.db(dbnome);
    comentarioclientes = db.collection('comentarios');

}

async function inserirComentarios (comentarios){
    await conectar();
    const result = await comentarioclientes.insertOne(comentarios);
    console.log('Inseriu o comentario');
    cliente.close();
    return result
}

async function pegarComentarios () {
    await conectar()
    const cursor = await comentarioclientes.find()
    const result = []
    await cursor.forEach(function (comentario) {
        result.push(comentario)
    });
    cliente.close();
    return result
}

module.exports = {
    inserirComentarios, pegarComentarios
}

