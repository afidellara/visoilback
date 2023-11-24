const mongoose = require('mongoose');

// Define el esquema para la entidad servicioConfeccionSchema
const servicioConfeccionSchema = new mongoose.Schema({
  imagen: String,
  descripcion: String,
  //abjuntas: String,
  tipoTela: String,
  cantidad: Number,
  tipo: String,
  cedula: String,
  nombre: String,
  precio: Number,
  estado: String,
  telefono: String
});

servicioConfeccionSchema.methods.setImgUrl = function setImgUrl(filename){
  this.imagen = `http://localhost:4000/public/${filename}` 
}

// Crea un modelo a partir del esquema
const ServicioConfeccion = mongoose.model('ServicioConfeccion', servicioConfeccionSchema);

// Exporta el modelo para poder utilizarlo en otras partes de tu aplicación
module.exports = ServicioConfeccion;

