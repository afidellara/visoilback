const Estampado = require('../../models/Servicio/Estampado');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
// Otros imports y configuraciones necesarios

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
// Define el método para registrar un producto
exports.registrarServicioEstampado = upload.single('imagen'), async (req, res) => {
  try {
    const {
      descripcion,
      tipo,
      cedula,
      nombre,
      precio
    } = req.body;

    // La URL de la imagen en S3 estará disponible en req.file.location
    const imagenURL = req.file.location;

    // Crear un nuevo producto con la URL de la imagen en S3
    const nuevoEstampado = new Estampado({
      imagen: imagenURL,
      descripcion,
      tipo,
      cedula,
      nombre,
      precio
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


// Otros imports y configuraciones necesarios

// Método para eliminar un servicio de estampado por su _id
exports.eliminarServicioEstampado = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a eliminar se pasa como parámetro en la URL

    // Verificar si el servicio de estampado existe antes de intentar eliminarlo
    const servicioExistente = await Estampado.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de estampado no existe.' });
    }

    // Eliminar el servicio de estampado por su _id
    await Estampado.findByIdAndDelete(servicioId);

    res.json({ message: 'Servicio de estampado eliminado con éxito.' });
  } catch (error) {
    console.error('Error al eliminar el servicio de estampado:', error);
    res.status(500).send('Error interno del servidor');
  }
};


// Otros imports y configuraciones necesarios

// Método para actualizar un servicio de estampado por su _id
exports.actualizarServicioEstampado = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a actualizar se pasa como parámetro en la URL
    const nuevosDatos = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el servicio de estampado existe antes de intentar actualizarlo
    const servicioExistente = await Estampado.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de estampado no existe.' });
    }

    // Actualizar el servicio de estampado por su _id
    await Estampado.findByIdAndUpdate(servicioId, nuevosDatos);

    res.json({ message: 'Servicio de estampado actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el servicio de estampado:', error);
    res.status(500).send('Error interno del servidor');
  }
};
