const TejidoIndustrial = require('../../models/Servicio/TejidoIndustrial');
const multer = require('multer');
const path = require('path');
// Otros imports y configuraciones necesarios

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ruta donde se almacenarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Define el método para registrar un elemento
exports.registrarServicioTejidoIndustrial = async (req, res) => {
  try {
    const {
      color,
      texto,
      tipo,
      cedula,
      nombre,
      precio
    } = req.body;

    const imagen = req.file ? req.file.filename : null;

    // Crear un nuevo elemento
    const nuevoTejidoIndustrial = new TejidoIndustrial({
      imagen,
      color,
      texto,
      tipo,
      cedula,
      nombre,
      precio
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



// Otros imports y configuraciones necesarios

// Método para eliminar un elemento de tejido industrial por su _id
exports.eliminarTejidoIndustrial = async (req, res) => {
  try {
    const elementoId = req.params.id; // El _id del elemento a eliminar se pasa como parámetro en la URL

    // Verificar si el elemento de tejido industrial existe antes de intentar eliminarlo
    const elementoExistente = await TejidoIndustrial.findById(elementoId);
    
    if (!elementoExistente) {
      return res.status(404).json({ message: 'El elemento de tejido industrial no existe.' });
    }

    // Eliminar el elemento de tejido industrial por su _id
    await TejidoIndustrial.findByIdAndDelete(elementoId);

    res.json({ message: 'Elemento de tejido industrial eliminado con éxito.' });
  } catch (error) {
    console.error('Error al eliminar el elemento de tejido industrial:', error);
    res.status(500).send('Error interno del servidor');
  }
};


// Otros imports y configuraciones necesarios

// Método para actualizar un elemento de tejido industrial por su _id
exports.actualizarTejidoIndustrial = async (req, res) => {
  try {
    const elementoId = req.params.id; // El _id del elemento a actualizar se pasa como parámetro en la URL
    const nuevosDatos = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el elemento de tejido industrial existe antes de intentar actualizarlo
    const elementoExistente = await TejidoIndustrial.findById(elementoId);
    
    if (!elementoExistente) {
      return res.status(404).json({ message: 'El elemento de tejido industrial no existe.' });
    }

    // Actualizar el elemento de tejido industrial por su _id
    await TejidoIndustrial.findByIdAndUpdate(elementoId, nuevosDatos);

    res.json({ message: 'Elemento de tejido industrial actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el elemento de tejido industrial:', error);
    res.status(500).send('Error interno del servidor');
  }
};
