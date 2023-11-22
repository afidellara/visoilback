const Corte = require('../../models/Servicio/Corte');

// Otros imports y configuraciones necesarios

// Define el método para registrar una pieza de corte
exports.registrarServicioCorte = async (req, res) => {
  try {
    const {
      piezaCorte,
      tela,
      cantidad,
      descripcion,
      imagen,
      tipo,
      cedula,
      nombre,
      precio
    } = req.body;

    // Crear una nueva pieza de corte
    const nuevaCorte = new Corte({
      piezaCorte,
      tela,
      cantidad,
      descripcion,
      imagen,
      tipo,
      cedula,
      nombre,
      precio
    });

    // Guardar la pieza de corte en la base de datos
    const CorteGuardada = await nuevaCorte.save();

    res.json(CorteGuardada);
  } catch (error) {
    console.error('Error al registrar la pieza de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};



// Otros imports y configuraciones necesarios

// Define el método para consultar todas las piezas de corte
exports.consultarServicioCorte = async (req, res) => {
  try {
    // Consultar todas las piezas de corte en la base de datos
    const corte = await Corte.find();

    res.json(corte);
  } catch (error) {
    console.error('Error al consultar las piezas de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};



// Otros imports y configuraciones necesarios

// Método para eliminar una pieza de corte por su _id
exports.eliminarServicioCorte = async (req, res) => {
  try {
    const CorteId = req.params.id; // El _id de la pieza de corte a eliminar se pasa como parámetro en la URL

    // Verificar si la pieza de corte existe antes de intentar eliminarla
    const CorteExistente = await Corte.findById(CorteId);
    
    if (!CorteExistente) {
      return res.status(404).json({ message: 'La pieza de corte no existe.' });
    }

    // Eliminar la pieza de corte por su _id
    await Corte.findByIdAndDelete(CorteId);

    res.json({ message: 'Pieza de corte eliminada con éxito.' });
  } catch (error) {
    console.error('Error al eliminar la pieza de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};



// Otros imports y configuraciones necesarios

// Método para actualizar una pieza de corte por su _id
exports.actualizarServicioCorte = async (req, res) => {
  try {
    const CorteId = req.params.id; // El _id de la pieza de corte a actualizar se pasa como parámetro en la URL
    const nuevosDatos = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si la pieza de corte existe antes de intentar actualizarla
    const CorteExistente = await Corte.findById(CorteId);
    
    if (!CorteExistente) {
      return res.status(404).json({ message: 'La pieza de corte no existe.' });
    }

    // Actualizar la pieza de corte por su _id
    await Corte.findByIdAndUpdate(CorteId, nuevosDatos);

    res.json({ message: 'Pieza de corte actualizada con éxito.' });
  } catch (error) {
    console.error('Error al actualizar la pieza de corte:', error);
    res.status(500).send('Error interno del servidor');
  }
};

