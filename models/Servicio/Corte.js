const mongoose = require('mongoose');

// Define el esquema para la entidad servicioCorteSchema
const servicioCorteSchema = new mongoose.Schema({
  piezaCorte: String,
  tipoTela: String,
  cantidad: Number,
  descripcion: String,
  imagen: String,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number,
  estado: String,
  telefono: String
});

servicioCorteSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imagen = `http://localhost:4000/public/${filename}` 
}
// Crea un modelo a partir del esquema
const ServicioCorte = mongoose.model('ServicioCorte', servicioCorteSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioCorte;

