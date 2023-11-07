const Administrador = require("../../models/Administrador");
const bcrypt = require('bcrypt');

// Asegúrate de importar correctamente tu modelo de Usuario
exports.iniciarSesion = async function (req, res) {
  const { correo, password } = req.body;

  try {
    // Buscar el adm por el correo proporcionado
    const administrador = await Administrador.findOne({ correo });
    
    // Verificar si el adm existe
    if (!administrador) {
      return res.status(404).json({ success: false, message: 'Correo no encontrado' });
    }

    // Si el adm existe, verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, administrador.password);
    if (passwordMatch) {
      // Aquí podrías realizar acciones adicionales, como generar un token de autenticación, etc.
      // Devolver una respuesta con un código de éxito y los datos del adm
      return res.status(200).json({ success: true, administrador });
    } else {
      return res.status(401).json({ success: false, message: 'Contraseña Incorrecta' });
    }
  } catch (error) {
    // Manejar errores en caso de que haya un problema con la base de datos u otros errores inesperados
    return res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};
