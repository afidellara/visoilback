const mongoose = require('mongoose');

// Define el esquema para la entidad servicioSublimacionTextilSchema
const servicioSublimacionTextilSchema = new mongoose.Schema({
  imagen: String,
  descripcion: String,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number
});

// Crea un modelo a partir del esquema
const ServicioSublimacionTextil = mongoose.model('ServicioSublimacionTextil', servicioSublimacionTextilSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioSublimacionTextil;

