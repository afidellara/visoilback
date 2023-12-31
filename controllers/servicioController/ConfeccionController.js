
const ServicioConfeccion = require('../../models/Servicio/Confeccion');
const mongoose = require('mongoose');

// Define el método para registrar un servicio de corte
exports.registrarServicioConfeccion = async (req, res) => {
  try {
    const {
      imagen,
      descripcion,
      tipoTela,
      cantidad,
      tipo,
      cedula,
      nombre,
      precio,
      estado,
      telefono
    } = req.body;

    // Crear un nuevo servicio de corte
    const nuevoServicioConfeccion = new ServicioConfeccion({
      imagen,
      descripcion,
      tipoTela,
      cantidad,
      tipo,
      cedula,
      nombre,
      precio,
      telefono,
      estado:'PENDIENTE'
    });

    if(req.file){
      const {filename}=req.file
      nuevoServicioConfeccion.setImgUrl(filename)
    }

    // Guardar el servicio en la base de datos
    const servicioGuardado = await nuevoServicioConfeccion.save();

    res.json(servicioGuardado);
  } catch (error) {
    console.error('Error al registrar el servicio de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Método para consultar todos los servicios de corte
exports.consultarServiciosConfeccion = async (req, res) => {
  try {
    // Consultar todos los servicios de corte en la base de datos
    const consultarServiciosConfeccion = await ServicioConfeccion.find();

    res.json(consultarServiciosConfeccion);
  } catch (error) {
    console.error('Error al consultar los servicios de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Método para eliminar un servicio de confección por su _id
exports.eliminarServicioConfeccion = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a eliminar se pasa como parámetro en la URL

    // Verificar si el servicio existe antes de intentar eliminarlo
    const servicioExistente = await ServicioConfeccion.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de confección no existe.' });
    }

    // Eliminar el servicio de confección por su _id
    await ServicioConfeccion.findByIdAndDelete(servicioId);

    res.json({ message: 'Servicio de confección eliminado con éxito.' });
  } catch (error) {
    console.error('Error al eliminar el servicio de confección:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Método para actualizar un servicio de confección por su _id
exports.actualizarServicioConfeccion = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a actualizar se pasa como parámetro en la URL
    const datosActualizados = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el servicio existe antes de intentar actualizarlo
    const servicioExistente = await ServicioConfeccion.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de confección no existe.' });
    }

    // Actualizar el servicio de confección por su _id
    await ServicioConfeccion.findByIdAndUpdate(servicioId, datosActualizados);

    res.json({ message: 'Servicio de confección actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el servicio de confección:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Método para actualizar un servicio de confección por su _id
exports.actualizarEstadoServicioConfeccion = async (req, res) => {
  try {
    const IdServicio = req.params.id;
    const { estado } = req.body;

    // Verificar si el servicio existe antes de intentar actualizarlo
    const servicioExistente = await ServicioConfeccion.findById({ _id: IdServicio });

    console.log('Servicio existente:', servicioExistente);
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de confección no existe.' });
    }

    // Actualizar solo el campo 'nombre' del servicio de confección por su nombre
    await ServicioConfeccion.findOneAndUpdate({ _id: IdServicio }, { estado });

    res.json({ message: 'Estado del servicio de confección actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el Estado del servicio de confección:', error);
    res.status(500).send('Error interno del servidor');
  }
};






