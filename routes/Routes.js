const express = require('express');
const productoController = require('../controllers/ProductoController');
const clienteController = require('../controllers/ClienteController');
const serviceController = require('../controllers/ServiceController');

const Router = express.Router();

//Rutas de producto
Router.post('/registrarproducto',productoController.registrarProducto);
Router.get('/productos',productoController.consultarProductosAdmin);
Router.put('/productos/:codigo', productoController.actualizarProducto);
Router.delete('/productos/:codigo', productoController.eliminarProducto);
Router.get('/productosfiltradoporprecio', productoController.filtrarPorPrecio);


//Rutas Cliente
Router.post('/registrarcliente', clienteController.registrarCliente);
Router.get('/clientes', clienteController.consultarClientes);


//Ruta Servicio
Router.post('/registrarServicio',serviceController.registrarServicio);

module.exports = Router;