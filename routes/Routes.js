const express = require('express');
const productoController = require('../controllers/ProductoController');
const clienteController = require('../controllers/ClienteController');
const administradorController = require('../controllers/AdministradorController');
const clienteAuthController = require('../controllers/Auth/ClienteAuthController');
const administradorAuthController = require('../controllers/Auth/AdministradorAuthController');
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

//Ruta Adm
Router.post('/registraradm', administradorController.registrarAdministrador);

//Rutas Cliente
Router.post('/registrarcliente', clienteController.registrarCliente);
Router.get('/clientes', clienteController.consultarClientes);
Router.put('/clientes/:cedula', clienteController.actualizarCliente);
Router.delete('/clientes/:cedula',clienteController.eliminarCliente);

//Rutas Servicio
//Rutas ServicioCorteVinillo
Router.post('/servicio/cortevinillo',servicioCorteVinilloController.registrarServicioCorteVinillo);
Router.get('/servicio/cortevinillo',servicioCorteVinilloController.consultarServiciosCorteVinillo);
Router.put('/servicio/cortevinillo/:id',servicioCorteVinilloController.actualizarServicioCorteVinillo);
Router.delete('/servicio/cortevinillo/:id',servicioCorteVinilloController.eliminarServicioCorteVinillo);
//Rutas confeccion
Router.post('/servicio/confeccion',servicioConfeccionController.registrarServicioConfeccion);
Router.get('/servicio/confeccion',servicioConfeccionController.consultarServiciosConfeccion);
Router.put('/servicio/confeccion/:id',servicioConfeccionController.actualizarServicioConfeccion);
Router.delete('/servicio/confeccion/:id',servicioConfeccionController.eliminarServicioConfeccion);
//Rutas corte
Router.post('/servicio/corte',servicioCorteController.registrarServicioCorte);
Router.get('/servicio/corte',servicioCorteController.consultarServicioCorte);
Router.put('/servicio/corte/:id',servicioCorteController.actualizarServicioCorte);
Router.delete('/servicio/corte/:id',servicioCorteController.eliminarServicioCorte);
//Rutas estampado
Router.post('/servicio/estampado',servicioEstampadoController.registrarServicioEstampado);
Router.get('/servicio/estampado',servicioEstampadoController.consultarServicioEstampado);
Router.put('/servicio/estampado/:id',servicioEstampadoController.actualizarServicioEstampado);
Router.delete('/servicio/estampado/:id',servicioEstampadoController.eliminarServicioEstampado);
//Rutas sublimacionTextil
Router.post('/servicio/sublimacionTextil',servicioSublimacionTextilController.registrarServicioSublimacionTextil);
Router.get('/servicio/sublimacionTextil',servicioSublimacionTextilController.consultarSublimacionTextil);
Router.put('/servicio/sublimacionTextil/:id',servicioSublimacionTextilController.actualizarSublimacionTextil);
Router.delete('/servicio/sublimacionTextil/:id',servicioSublimacionTextilController.eliminarSublimacionTextil);
//Rutas tejidoIndustrial
Router.post('/servicio/tejidoIndustrial',servicioTejidoIndustrialController.registrarServicioTejidoIndustrial);
Router.get('/servicio/tejidoIndustrial',servicioTejidoIndustrialController.consultarTejidoIndustrial);
Router.put('/servicio/tejidoIndustrial/:id',servicioTejidoIndustrialController.actualizarTejidoIndustrial);
Router.delete('/servicio/tejidoIndustrial/:id',servicioTejidoIndustrialController.eliminarTejidoIndustrial);


//Ruta Inicio Sesion
Router.post('/inicioSesionCliente', clienteAuthController.iniciarSesion);
Router.post('/inicioSesionAdm', administradorAuthController.iniciarSesion);

module.exports = Router;