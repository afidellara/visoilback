const express = require('express');
const productoController = require('../controllers/ProductoController');
const clienteController = require('../controllers/ClienteController');
const clienteAuthController = require('../controllers/Auth/ClienteAuthController');
const servicioCorteVinilloController = require('../controllers/servicioController/CorteVinilloController');
const servicioConfeccionController = require('../controllers/servicioController/ConfeccionController');
const servicioCorteController = require('../controllers/servicioController/CorteController');
const servicioEstampadoController = require('../controllers/servicioController/EstampadoController');
const servicioSublimacionTextilController = require('../controllers/servicioController/SublimacionTextilController');
const servicioTejidoIndustrialController = require('../controllers/servicioController/TejidoIndustrialController');



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
Router.put('/clientes/:cedula', clienteController.actualizarCliente);
Router.delete('/clientes/:cedula',clienteController.eliminarCliente);

//Rutas Servicio
//Rutas ServicioCorteVinillo
Router.post('/servicio/cortevinillo',servicioCorteVinilloController.registrarServicioCorteVinillo);
Router.get('/servicio/cortevinillo',servicioCorteVinilloController.consultarServiciosCorteVinillo);
//Rutas confeccion
Router.post('/servicio/confeccion',servicioConfeccionController.registrarServicioConfeccion);
Router.get('/servicio/confeccion',servicioConfeccionController.consultarServiciosConfeccion);
//Rutas corte
Router.post('/servicio/corte',servicioCorteController.registrarServicioCorte);
Router.get('/servicio/corte',servicioCorteController.consultarServicioCorte);
//Rutas estampado
Router.post('/servicio/estampado',servicioEstampadoController.registrarServicioEstampado);
Router.get('/servicio/estampado',servicioEstampadoController.consultarServicioEstampado);
//Rutas sublimacionTextil
Router.post('/servicio/sublimacionTextil',servicioSublimacionTextilController.registrarServicioSublimacionTextil);
Router.get('/servicio/sublimacionTextil',servicioSublimacionTextilController.consultarSublimacionTextil);
//Rutas tejidoIndustrial
Router.post('/servicio/tejidoIndustrial',servicioTejidoIndustrialController.registrarServicioTejidoIndustrial);
Router.get('/servicio/tejidoIndustrial',servicioTejidoIndustrialController.consultarTejidoIndustrial);


//Ruta Inicio Sesion
Router.post('/inicioSesionCliente', clienteAuthController.iniciarSesion);

module.exports = Router;