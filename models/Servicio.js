const mongoose = require('mongoose');

// Define el esquema del servicio
const servicioSchema = new mongoose.Schema({
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria:{
    type: String,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
  },
  imagen: String, // Puedes almacenar la ruta de la imagen o los datos de la imagen en base64
  imagen2: String,
  imagen3: String,
  tela: String,
  talla: String,
  medida: String,
  diseño: String
});

// Crea el modelo de servicio
const Servicio = mongoose.model('servicio', servicioSchema);

module.exports =Servicio;