const Producto = require('../models/Producto'); // Asegúrate de que la ruta sea correcta

// Controlador para registrar un nuevo producto
exports.registrarProducto = async (req, res) => {
  try {
    // Obtén los datos del producto desde el cuerpo de la solicitud (req.body)
    const { codigo, nombre, descripcion, precio, categoria, referencia, imagen, tela, talla, medida, diseño } = req.body;

    // Crea una instancia del modelo Producto con los datos recibidos
    const nuevoProducto = new Producto({
      codigo,
      nombre,
      descripcion,
      precio,
      categoria,
      referencia,
      imagen,
      tela,
      talla,
      medida,
      diseño
    });

    // Guarda el nuevo producto en la base de datos
    await nuevoProducto.save();
    console.log("Producto guardado");
    // Responde con un mensaje de éxito
    res.status(201).json({ mensaje: 'Producto registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al registrar el producto' });
  }
};