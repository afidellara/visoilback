const SublimacionTextil = require('../../models/Servicio/SublimacionTextil');

// Otros imports y configuraciones necesarios

// Define el método para registrar un producto
exports.registrarServicioSublimacionTextil = async (req, res) => {
  try {
    const {
      imagen,
      descripcion,
      tipo,
      cedula,
      nombre
    } = req.body;

    // Crear un nuevo producto
    const nuevoSublimacionTextil = new SublimacionTextil({
      imagen,
      descripcion,
      tipo,
      cedula,
      nombre
    });

    // Guardar el producto en la base de datos
    const sublimacionTextilGuardado = await nuevoSublimacionTextil.save();

    res.json(sublimacionTextilGuardado);
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
};




// Otros imports y configuraciones necesarios

// Define el método para consultar todos los productos
exports.consultarSublimacionTextil = async (req, res) => {
  try {
    // Consultar todos los productos en la base de datos
    const sublimacionTextil = await SublimacionTextil.find();

    res.json(sublimacionTextil);
  } catch (error) {
    console.error('Error al consultar los productos:', error);
    res.status(500).send('Error interno del servidor');
  }
};
