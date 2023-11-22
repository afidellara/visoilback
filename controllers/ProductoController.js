const Producto = require('../models/Producto');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.S3_BUCKET_NAME,
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + '-' + file.originalname);
    },
  }),
});

// Controlador para registrar un nuevo producto
exports.registrarProducto = upload.single('imagen'), async (req, res) => {
  try {
    // Obtén los datos del formulario desde el cuerpo de la solicitud (req.body)
    const { codigo, nombre, descripcion, precio, categoria, referencia, tela, talla, medida, disenio } = req.body;

    // La información de la imagen está disponible en req.file debido al middleware Multer
    const imagen = req.file;

    // Crea una instancia del modelo Producto con los datos recibidos
    const nuevoProducto = new Producto({
      codigo,
      nombre,
      descripcion,
      precio,
      categoria,
      referencia,
      imagen: imagen.key, // Guarda la clave de la imagen en lugar de la imagen completa
      tela,
      talla,
      medida,
      disenio
    });

    // Guarda el nuevo producto en la base de datos
    await nuevoProducto.save();
    console.log("Producto guardado");
    // Responde con un mensaje de éxito
    res.status(201).json({ mensaje: 'Producto registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al registrar el producto'});
  }
};



// Controlador para consultar todos los productos
exports.consultarProductosAdmin = async (req, res) => {
  try {
    // Utiliza el modelo Producto para buscar todos los productos en la base de datos
    const productos = await Producto.find();

    // Responde con la lista de productos en formato JSON
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al consultar los productos:', error);
    // Responde con un mensaje de error
    res.status(500).json({ error: 'Error al consultar los productos' });
  }
};

// Controlador para actualizar un producto
exports.actualizarProducto = async (req, res) => {
  const codigoProducto = req.params.codigo; // El código del producto a actualizar

  try {
    const productoActualizado = await Producto.findOneAndUpdate(
      { codigo: codigoProducto },
      {
        $set: req.body, // Utiliza el cuerpo de la solicitud para actualizar los campos
      },
      { new: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};


// Controlador para eliminar un producto
exports.eliminarProducto = async (req, res) => {
  const codigoProducto = req.params.codigo; // El código del producto a eliminar

  try {
    const productoEliminado = await Producto.findOneAndDelete({ codigo: codigoProducto });

    if (!productoEliminado) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(200).json({ mensaje: 'Producto eliminado correctamente', producto: productoEliminado });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};


exports.filtrarPorPrecio = async (req, res) => {
  try {
    const minPrecio = req.query.minPrecio;
    const maxPrecio = req.query.maxPrecio;

    if (!minPrecio || !maxPrecio) {
      return res.status(400).json({ message: 'Debes proporcionar tanto minPrecio como maxPrecio en la URL' });
    }

    const productos = await Producto.find({
      precio: {
        $gte: parseFloat(minPrecio),
        $lte: parseFloat(maxPrecio),
      },
    });

    return res.json(productos);
  } catch (error) {
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};