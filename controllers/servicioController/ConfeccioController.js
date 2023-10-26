const express = require('express');
const router = express.Router();
const ServicioConfeccion = require('../../models/Servicio/Confeccion');

// Otros imports y configuraciones necesarios

// Define el método para registrar un servicio de corte
exports.registrarServicioConfeccion = async (req, res) => {
  try {
    const {
      imagen,
      descripcion,
      abjuntas,
      tipoTela,
      cantidad,
      tipo,
      cedula,
      nombre
    } = req.body;

    // Crear un nuevo servicio de corte
    const nuevoServicioConfeccion = new ServicioConfeccion({
      imagen,
      descripcion,
      abjuntas,
      tipoTela,
      cantidad,
      tipo,
      cedula,
      nombre
    });

    // Guardar el servicio en la base de datos
    const servicioGuardado = await nuevoServicioConfeccion.save();

    res.json(servicioGuardado);
  } catch (error) {
    console.error('Error al registrar el servicio de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};


const ServicioConfeccion = require('../models/servicioCorteModel');

// Otros imports y configuraciones necesarios

// Método para consultar todos los servicios de corte
exports.consultarServiciosConfeccion = async (req, res) => {
  try {
    // Consultar todos los servicios de corte en la base de datos
    const serviciosConfeccion = await ServicioConfeccion.find();

    res.json(serviciosCorte);
  } catch (error) {
    console.error('Error al consultar los servicios de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};
