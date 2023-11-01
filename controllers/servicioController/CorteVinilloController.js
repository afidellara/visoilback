const express = require('express');
const router = express.Router();
const ServicioCorteVinillo = require('../../models/Servicio/CorteVinillo');

// Otras importaciones y configuraciones necesarias

// Define el método para registrar un servicio de corte de vinilo
exports.registrarServicioCorteVinillo = async (req, res) => {
  try {
    const {
      imagen,
      color,
      nombre,
      descripcion,
      texto,
      tamanio,
      tipo,
      cedula,
    } = req.body;

    // Crear un nuevo servicio de corte de vinilo
    const nuevoServicioCorteVinillo = new ServicioCorteVinillo({
      imagen,
      color,
      nombre,
      descripcion,
      texto,
      tamanio,
      tipo,
      cedula
    });

    // Guardar el servicio en la base de datos
    const servicioGuardado = await nuevoServicioCorteVinillo.save();

    res.json(servicioGuardado);
  } catch (error) {
    console.error('Error al registrar el servicio de corte de vinilo:', error);
    res.status(500).send('Error interno del servidor');
  }
};

exports.consultarServiciosCorteVinillo = async (req, res) => {
  try {
    // Realizar una consulta a la base de datos para obtener todos los servicios de corte de vinilo
    const servicios = await ServicioCorteVinillo.find();

    res.json(servicios);
  } catch (error) {
    console.error('Error al consultar los servicios de corte de vinilo:', error);
    res.status(500).send('Error interno del servidor');
  }
};


// Otros imports y configuraciones necesarios

// Método para eliminar un servicio de corte de vinilo por su _id
exports.eliminarServicioCorteVinillo = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a eliminar se pasa como parámetro en la URL

    // Verificar si el servicio de corte de vinilo existe antes de intentar eliminarlo
    const servicioExistente = await ServicioCorteVinillo.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de corte de vinilo no existe.' });
    }

    // Eliminar el servicio de corte de vinilo por su _id
    await ServicioCorteVinillo.findByIdAndDelete(servicioId);

    res.json({ message: 'Servicio de corte de vinilo eliminado con éxito.' });
  } catch (error) {
    console.error('Error al eliminar el servicio de corte de vinilo:', error);
    res.status(500).send('Error interno del servidor');
  }
};


// Otros imports y configuraciones necesarios

// Método para actualizar un servicio de corte de vinilo por su _id
exports.actualizarServicioCorteVinillo = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a actualizar se pasa como parámetro en la URL
    const nuevosDatos = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el servicio de corte de vinilo existe antes de intentar actualizarlo
    const servicioExistente = await ServicioCorteVinillo.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de corte de vinilo no existe.' });
    }

    // Actualizar el servicio de corte de vinilo por su _id
    await ServicioCorteVinillo.findByIdAndUpdate(servicioId, nuevosDatos);

    res.json({ message: 'Servicio de corte de vinilo actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el servicio de corte de vinilo:', error);
    res.status(500).send('Error interno del servidor');
  }
};
