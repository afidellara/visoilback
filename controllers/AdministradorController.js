const bcrypt = require('bcrypt');
const Administrador = require('../models/Administrador'); // Importa el modelo de Adm


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



