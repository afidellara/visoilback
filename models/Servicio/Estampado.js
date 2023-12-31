const mongoose = require('mongoose');

// Define el esquema para la entidad servicioEstampadoSchema
const servicioEstampadoSchema = new mongoose.Schema({
  imagen: String,
  descripcion: String,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number,
  estado: String,
  telefono: String
});

// port: 4000
// http://localhost

servicioEstampadoSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imagen = `http://localhost:4000/public/${filename}` 
}

// Crea un modelo a partir del esquema
const ServicioEstampado = mongoose.model('ServicioEstampado', servicioEstampadoSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioEstampado;

