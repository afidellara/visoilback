const Servicio = require('../models/Servicio'); // Asegúrate de que la ruta sea correcta

// Controlador para registrar un nuevo servicio
exports.registrarServicio = async (req, res) => {
  try {
    // Obtén los datos del servicio desde el cuerpo de la solicitud (req.body)
    const { codigo, nombre, descripcion, precio, categoria, referencia, imagen, imagen2, imagen3, tela, talla, medida, diseño } = req.body;

    // Crea una instancia del modelo Servicio con los datos recibidos
    const nuevoServicio = new Servicio({
      codigo,
      nombre,
      descripcion,
      precio,
      categoria,
      referencia,
      imagen,
      imagen2,
      imagen3,
      tela,
      talla,
      medida,
      diseño
    });

    // Guarda el nuevo servicio en la base de datos
    await nuevoServicio.save();
    console.log("Servicio guardado");
    // Responde con un mensaje de éxito
    res.status(201).json({ mensaje: 'Servicio registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el Servicio:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al registrar el Servicio' });
  }
};

//consultar todos los servicios
exports.consultarServiciosAdmin = async (req, res) => {
  try {
    // Utiliza el modelo Servicios para buscar todos los servicios en la base de datos
    const servicios = await Servicio.find();

    // Responde con la lista de servicios en formato JSON
    res.status(200).json(servicios);
  } catch (error) {
    console.error('Error al consultar los servicios:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al consultar los servicios' });
  }
};

// Controlador para actualizar un servicio
exports.actualizarServicio = async (req, res) => {
  const codigoServicio = req.params.codigo; // El código del servicio a actualizar

  try {
    const servicioActualizado = await Servicio.findOneAndUpdate(
      { codigo: codigoServicio },
      {
        $set: req.body, // Utiliza el cuerpo de la solicitud para actualizar los campos
      },
      { new: true }
    );

    if (!servicioActualizado) {
      return res.status(404).json({ error: 'Servicio no encontrado' });
    }

    res.status(200).json(servicioActualizado);
  } catch (error) {
    console.error('Error al actualizar el servicio:', error);
    res.status(500).json({ error: 'Error al actualizar el servicio' });
  }
};

// Controlador para eliminar un Servicio
exports.eliminarServicio = async (req, res) => {
  const codigoServicio = req.params.codigo; // El código del servicio a eliminar

  try {
    const servicioEliminado = await Servicio.findOneAndDelete({ codigo: codigoServicio});

    if (!servicioEliminado) {
      return res.status(404).json({ error: 'servicio no encontrado' });
    }

    res.status(200).json({ mensaje: 'servicio eliminado correctamente', servicio: servicioEliminado });
  } catch (error) {
    console.error('Error al eliminar el servicio:', error);
    res.status(500).json({ error: 'Error al eliminar el servicio' });
  }
};



// Controlador para registrar un nuevo servicio personalizado
exports.registrarServicioPersonalizado = async (req, res) => {
  try {
    // Obtén los datos del servicio desde el cuerpo de la solicitud (req.body)
    const { codigo, nombre, descripcion, precio, categoria, referencia, imagen, imagen2, imagen3, tela, talla, medida, diseño } = req.body;

    // Crea una instancia del modelo Servicio con los datos recibidos
    const nuevoServicioPersonalizado = new Servicio({
      codigo,
      nombre,
      descripcion,
      precio,
      categoria,
      referencia,
      imagen,
      imagen2,
      imagen3,
      tela,
      talla,
      medida,
      diseño
    });

    // Guarda el nuevo servicio personalizado en la base de datos
    await nuevoServicioPersonalizado.save();
    console.log("Servicio personalizado guardado");
    // Responde con un mensaje de éxito
    res.status(201).json({ mensaje: 'Servicio personalizado registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el Servicio personalizado:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al registrar el Servicio personalizado' });
  }
};