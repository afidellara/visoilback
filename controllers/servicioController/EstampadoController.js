const Estampado = require('../../models/Servicio/Estampado');

// Define el método para registrar un producto
exports.registrarServicioEstampado = (req, res) => {
  try {
    const {
      descripcion,
      tipo,
      cedula,
      nombre,
      precio,
      estado,
      telefono
    } = req.body;

    // La URL de la imagen en S3 estará disponible en req.file.location
        // Crea un nuevo producto con la URL de la imagen en S3
    const nuevoEstampado = new Estampado({
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
      nuevoEstampado.setImgUrl(filename)
    }

    // Guarda el producto en la base de datos
    const estampadoGuardado =  nuevoEstampado.save();
    res.json(estampadoGuardado);
  } catch (error) {
    console.error('Error al registrar el producto:', error);
    res.status(500).send('Error interno del servidor');
  }
};
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
    const id = req.params.id; // El _id del servicio a eliminar se pasa como parámetro en la URL

    console.log(id); 
    // Verificar si el servicio de estampado existe antes de intentar eliminarlo
    const servicioExistente = await Estampado.findById(id);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de estampado no existe.' });
    }

    // Eliminar el servicio de estampado por su _id
    await Estampado.findByIdAndDelete(id);

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
    const {estado} = req.body; // Los nuevos datos a actualizar se envían en el cuerpo de la solicitud

    // Verificar si el servicio de estampado existe antes de intentar actualizarlo
    const servicioExistente = await Estampado.findById(servicioId);
    
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de estampado no existe.' });
    }

    // Actualizar el servicio de estampado por su _id
    await Estampado.findByIdAndUpdate(servicioId, estado);

    res.json({ message: 'Servicio de estampado actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el servicio de estampado:', error);
    res.status(500).send('Error interno del servidor');
  }
};


exports.actualizarEstadoServicioEstampado = async (req, res) => {
  try {
    const IdServicio = req.params.id;
    const { estado } = req.body;

    // Verificar si el servicio existe antes de intentar actualizarlo
    const servicioExistente = await Estampado.findById({ _id: IdServicio });

    console.log('Servicio existente:', servicioExistente);
    if (!servicioExistente) {
      return res.status(404).json({ message: 'El servicio de Estampado no existe.' });
    }

    // Actualizar solo el campo 'nombre' del servicio de confección por su nombre
    await Estampado.findOneAndUpdate({ _id: IdServicio }, { estado });

    res.json({ message: 'Estado del Servicio Estampado actualizado con éxito.' });
  } catch (error) {
    console.error('Error al actualizar el estado del servicio de Estampado:', error);
    res.status(500).send('Error interno del servidor');
  }
};