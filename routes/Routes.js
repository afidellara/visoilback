const express = require('express');
const productoController = require('../controllers/ProductoController');
const Router = express.Router();

//Rutas de producto
Router.post('/registrarproducto',productoController.registrarProducto);

module.exports = Router;