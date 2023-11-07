const bcrypt = require('bcrypt');
const Administrador = require('../models/Administrador'); // Importa el modelo de Adm

exports.registrarAdministrador = async (req, res) => {
  try {
      // Extrae los datos del adm del cuerpo de la solicitud
      const {
        codigo,
        correo,
        password,
        estado
      } = req.body;

      const hashContraseña = await bcrypt.hash(password, 10);

      // Crea una instancia del modelo adm con los datos recibidos
      const nuevoAdministrador = new Administrador({
          codigo,
          correo,
          estado,
          password: hashContraseña
      });

      // Guarda el nuevo adm en la base de datos
      await nuevoAdministrador.save();

      res.status(201).json({ mensaje: 'Administrador registrado con éxito' });
  } catch (error) {
      console.error('Error al registrar el adm:', error);
      res.status(500).json({ error: 'Error al registrar el adm' });
  }
};

// Controlador para actualizar un cliente por su CEDULA
exports.actualizarAdministrador = async (req, res) => {
    const cedulaAdministrador = req.params.codigo; // La cedula del cliente a actualizar

    try {
        const administradorActualizado = await Administrador.findOneAndUpdate(
            { codigo: cedulaAdministrador },
            {
                $set: req.body, // Utiliza el cuerpo de la solicitud para actualizar los campos
            },
            { new: true }
        );

        if (!Actualizado) {
            return res.status(404).json({ error: 'Administrador no encontrado' });
        }

        res.status(200).json(administradorActualizado);
    } catch (error) {
        console.error('Error al actualizar el adm:', error);
        res.status(500).json({ error: 'Error al actualizar el adm' });
    }
};

// Controlador para eliminar un cliente
exports.eliminarAdministrador = async (req, res) => {
    const cedulaAdministrador = req.params.codigo; // La cedula del cliente a eliminar
  
    try {
      const administradorEliminado = await Administrador.findOneAndDelete({ codigo: cedulaAdministrador });
  
      if (!administradorEliminado) {
        return res.status(404).json({ error: 'Adm no encontrado' });
      }
  
      res.status(200).json({ mensaje: 'Adm eliminado correctamente', administrador: administradorEliminado });
    } catch (error) {
      console.error('Error al eliminar el adm:', error);
      res.status(500).json({ error: 'Error al eliminar el adm' });
    }
  };



