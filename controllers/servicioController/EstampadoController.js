const Estampado = require('../../models/Servicio/Estampado');

// Otros imports y configuraciones necesarios

// Define el método para registrar un producto
exports.registrarServicioEstampado = async (req, res) => {
  try {
    const {
      imagen,
      descripcion,
      tipo,
      cedula,
      nombre
    } = req.body;

    // Crear un nuevo producto
    const nuevoEstampado = new Estampado({
      imagen,
      descripcion,
      tipo,
      cedula,
      nombre
    });

    // Guardar el producto en la base de datos
    const estampadoGuardado = await nuevoEstampado.save();

    res.json(estampadoGuardado);
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
};




// Otros imports y configuraciones necesarios

// Define el método para consultar todos los productos
exports.consultarServicioEstampado = async (req, res) => {
  try {
    // Consultar todos los productos en la base de datos
    const estampado = await Estampado.find();

    res.json(estampado);
  } catch (error) {
    console.error('Error al consultar los productos:', error);
    res.status(500).send('Error interno del servidor');
  }
};
