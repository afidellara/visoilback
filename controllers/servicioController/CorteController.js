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
      nombre
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
      nombre
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
