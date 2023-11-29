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
const upload = require('../config/storage'); 


const Router = express.Router();

//Rutas de producto
Router.post('/registrarproducto',upload.single('imagen'),productoController.registrarProducto);
//Router.post('/registrarproducto',productoController.registrarProducto);
Router.get('/productos',productoController.consultarProductosAdmin);
Router.put('/productos/:codigo', productoController.actualizarProducto);
Router.delete('/productos/:codigo', productoController.eliminarProducto);
Router.get('/productosfiltradoporprecio', productoController.filtrarPorPrecio);



//Ruta Adm
Router.post('/registraradm', administradorController.registrarAdministrador);

//Rutas Cliente
Router.post('/registrarcliente', upload.single('imagen'),clienteController.registrarCliente);
Router.get('/clientes', clienteController.consultarClientes);
Router.put('/clientes/:cedula', clienteController.actualizarCliente);
Router.delete('/clientes/:cedula',clienteController.eliminarCliente);

//Rutas Servicio
//Rutas confeccion
Router.post('/servicio/confeccion',upload.single('imagen'),servicioConfeccionController.registrarServicioConfeccion);
Router.get('/servicio/confeccion',servicioConfeccionController.consultarServiciosConfeccion);
Router.delete('/servicio/confeccion/:id',servicioConfeccionController.eliminarServicioConfeccion);
Router.put('/servicio/confeccionestado/:id',servicioConfeccionController.actualizarEstadoServicioConfeccion);
Router.put('/servicio/confeccion/:id',servicioConfeccionController.actualizarServicioConfeccion);//falta en el front

//Rutas corte
Router.post('/servicio/corte',upload.single('imagen'),servicioCorteController.registrarServicioCorte);
Router.get('/servicio/corte',servicioCorteController.consultarServicioCorte);
Router.delete('/servicio/corte/:id',servicioCorteController.eliminarServicioCorte);
Router.put('/servicio/corteestado/:id',servicioCorteController.actualizarEstadoServicioCorte);
Router.put('/servicio/corte/:id',servicioCorteController.actualizarServicioCorte);//falta en el front

 
//Rutas ServicioCorteVinillo
Router.post('/servicio/cortevinillo',upload.single('imagen'),servicioCorteVinilloController.registrarServicioCorteVinillo);
Router.get('/servicio/cortevinillo',servicioCorteVinilloController.consultarServiciosCorteVinillo);
Router.delete('/servicio/cortevinillo/:id',servicioCorteVinilloController.eliminarServicioCorteVinillo);
Router.put('/servicio/cortevinillo/:id',servicioCorteVinilloController.actualizarServicioCorteVinillo);//falta en el front
Router.put('/servicio/cortevinilloestado/:id',servicioCorteVinilloController.actualizarEstadoServicioCorteVinillo);

//Rutas estampado
Router.post('/servicio/estampado', upload.single('imagen'),servicioEstampadoController.registrarServicioEstampado); 
Router.get('/servicio/estampado',servicioEstampadoController.consultarServicioEstampado);
Router.delete('/servicio/estampado/:id',servicioEstampadoController.eliminarServicioEstampado);
Router.put('/servicio/estampado/:id',servicioEstampadoController.actualizarServicioEstampado);//falta en el front
Router.put('/servicio/estampadoestado/:id',servicioEstampadoController.actualizarEstadoServicioEstampado);//falta en el front


//Rutas sublimacionTextil
Router.post('/servicio/sublimacionTextil',upload.single('imagen'),servicioSublimacionTextilController.registrarServicioSublimacionTextil);
Router.get('/servicio/sublimacionTextil',servicioSublimacionTextilController.consultarSublimacionTextil);
Router.delete('/servicio/sublimacionTextil/:id',servicioSublimacionTextilController.eliminarSublimacionTextil);
Router.put('/servicio/sublimacionTextil/:id',servicioSublimacionTextilController.actualizarSublimacionTextil);//falta en el front
Router.put('/servicio/sublimacionTextilestado/:id',servicioSublimacionTextilController.actualizarEstadoServicioSublimacionTextil);

//Rutas tejidoIndustrial
Router.post('/servicio/tejidoIndustrial',upload.single('imagen'),servicioTejidoIndustrialController.registrarServicioTejidoIndustrial);
Router.get('/servicio/tejidoIndustrial',servicioTejidoIndustrialController.consultarTejidoIndustrial);
Router.delete('/servicio/tejidoIndustrial/:id',servicioTejidoIndustrialController.eliminarTejidoIndustrial);
Router.put('/servicio/tejidoIndustrial/:id',servicioTejidoIndustrialController.actualizarTejidoIndustrial);//falta en el front
Router.put('/servicio/tejidoIndustrialestado/:id',servicioTejidoIndustrialController.actualizarEstadoServicioTejidoIndustrial);//falta en el front

//Ruta Inicio Sesion
Router.post('/inicioSesionCliente', clienteAuthController.iniciarSesion);
Router.post('/inicioSesionAdm', administradorAuthController.iniciarSesion);

module.exports = Router;