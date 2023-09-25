const express = require('express');
const productoController = require('../controllers/ProductoController');
const clienteController = require('../controllers/ClienteController');
const Router = express.Router();

//Rutas de producto
Router.post('/registrarproducto',productoController.registrarProducto);
Router.get('/productos',productoController.consultarProductos);

//Rutas Cliente
Router.post('/registrarcliente',clienteController.registrarCliente);


module.exports = Router;