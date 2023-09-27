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