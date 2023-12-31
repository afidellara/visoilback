const mongoose = require('mongoose');

// Define el esquema para la entidad Elemento
const servicioTejidoIndustrialSchema = new mongoose.Schema({
  imagen: String,
  color: String,
  texto: String,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number,
  estado: String,
  telefono: String
});


servicioTejidoIndustrialSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imagen = `http://localhost:4000/public/${filename}` 
}
// Crea un modelo a partir del esquema
const ServicioTejidoIndustrial = mongoose.model('ServicioTejidoIndustrial', servicioTejidoIndustrialSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioTejidoIndustrial;

