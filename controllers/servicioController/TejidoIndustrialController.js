const TejidoIndustrial = require('../../models/Servicio/TejidoIndustrial');

// Otros imports y configuraciones necesarios

// Define el método para registrar un elemento
exports.registrarServicioTejidoIndustrial = async (req, res) => {
  try {
    const {
      imagen,
      color,
      texto,
      tipo,
      cedula,
      nombre
    } = req.body;

    // Crear un nuevo elemento
    const nuevoTejidoIndustrial = new TejidoIndustrial({
      imagen,
      color,
      texto,
      tipo,
      cedula,
      nombre
    });

    // Guardar el elemento en la base de datos
    const tejidoIndustrialGuardado = await nuevoTejidoIndustrial.save();

    res.json(tejidoIndustrialGuardado);
  } catch (error) {
    console.error('Error al registrar el elemento:', error);
    res.status(500).send('Error interno del servidor');
  }
};




// Otros imports y configuraciones necesarios

// Define el método para consultar todos los elementos
exports.consultarTejidoIndustrial = async (req, res) => {
  try {
    // Consultar todos los elementos en la base de datos
    const tejidoIndustrial = await TejidoIndustrial.find();

    res.json(tejidoIndustrial);
  } catch (error) {
    console.error('Error al consultar los elementos:', error);
    res.status(500).send('Error interno del servidor');
  }
};
