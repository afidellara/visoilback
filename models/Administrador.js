// Administrador.js

const mongoose = require('mongoose');

// Define el esquema del Adm
const administradorSchema = new mongoose.Schema({
     codigo: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true
    },
});

// Crea el modelo de Adm
const Administrador = mongoose.model('Administrador', administradorSchema);

module.exports = Administrador;