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
      nombre,
      precio,
      estado,
      telefono
    } = req.body;

    // Crear un nuevo producto
    const nuevoSublimacionTextil = new SublimacionTextil({
      imagen,
      descripcion,
      tipo,
      cedula,
      nombre,
      precio,
      telefono,
      estado:'PENDIENTE'
    });

    if(req.file){
      const {filename}=req.file
      nuevoSublimacionTextil.setImgUrl(filename)
    }

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



// Otros imports y configuraciones necesarios

// Método para eliminar un servicio de sublimación textil por su _id
exports.eliminarSublimacionTextil = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a eliminar se pasa como parámetro en la URL

    // Verificar si el servicio de sublimación textil existe antes de intentar eliminarlo
    const servicioExistente = await SublimacionTextil.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de sublimación textil no existe.' });
    }

    // Eliminar el servicio de sublimación textil por su _id
    await SublimacionTextil.findByIdAndDelete(servicioId);

    res.json({ message: 'Servicio de sublimación textil eliminado con éxito.' });
  } catch (error) {
    console.error('Error al eliminar el servicio de sublimación textil:', error);
    res.status(500).send('Error interno del servidor');
  }
};


// Otros imports y configuraciones necesarios

// Método para actualizar un servicio de sublimación textil por su _id
exports.actualizarSublimacionTextil = async (req, res) => {
  try {
    const servicioId = req.params.id; // El _id del servicio a actualizar se pasa como parámetro en la URL
    const nuevosDatos = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el servicio de sublimación textil existe antes de intentar actualizarlo
    const servicioExistente = await SublimacionTextil.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de sublimación textil no existe.' });
    }

    // Actualizar el servicio de sublimación textil por su _id
    await SublimacionTextil.findByIdAndUpdate(servicioId, nuevosDatos);

    res.json({ message: 'Servicio de sublimación textil actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el servicio de sublimación textil:', error);
    res.status(500).send('Error interno del servidor');
  }
};

exports.actualizarEstadoServicioSublimacionTextil = async (req, res) => {
  try {
    const IdServicio = req.params.id;
    const { estado } = req.body;

    // Verificar si el servicio existe antes de intentar actualizarlo
    const servicioExistente = await SublimacionTextil.findById({ _id: IdServicio });

    console.log('Servicio existente:', servicioExistente);
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de Sublimacion Textil no existe.' });
    }

    // Actualizar solo el campo 'nombre' del servicio de confección por su nombre
    await SublimacionTextil.findOneAndUpdate({ _id: IdServicio }, { estado });

    res.json({ message: 'Estado del Servicio Sublimacion Textil actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el estado del servicio de Sublimacion Textil:', error);
    res.status(500).send('Error interno del servidor');
  }
};
