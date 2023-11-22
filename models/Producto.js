const mongoose = require('mongoose');

// Define el esquema del producto
const productoSchema = new mongoose.Schema({
  codigo: {
    type: String,
  },
  nombre: {
    type: String,
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
  },
  categoria:{
    type: String,
  },
  referencia: {
    type: String,
  },
  imagen: String, // Puedes almacenar la ruta de la imagen o los datos de la imagen en base64
  tela: String,
  talla: String,
  medida: String,
  disenio: String
});

// Crea el modelo de Producto
const Producto = mongoose.model('Producto', productoSchema);

module.exports=Producto;