const mongoose = require('mongoose');

// Define el esquema para la entidad ServicioCorteVinillo
const servicioCorteVinilloSchema = new mongoose.Schema({
  imagen: String,
  color: String,
  nombre: String,
  descripcion: String,
  texto: String,
  tamanio: String,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number,
  estado: String,
  telefono: String
});

servicioCorteVinilloSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imagen = `http://localhost:4000/public/${filename}` 
}

// Crea un modelo a partir del esquema
const ServicioCorteVinillo = mongoose.model('ServicioCorteVinillo', servicioCorteVinilloSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioCorteVinillo;
