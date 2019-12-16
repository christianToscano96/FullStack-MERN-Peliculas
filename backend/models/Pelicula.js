const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const peliculaSchema = Schema({
    title: {
        type: String,
        trim: true
    },
    price: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    hora_inicio: {
        type: String,
        trim: true
    },
    img: {
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Pelicula', peliculaSchema);