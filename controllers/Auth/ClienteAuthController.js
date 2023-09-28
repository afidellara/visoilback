const Cliente = require("../../models/Cliente");
const bcrypt = require('bcrypt');

// Asegúrate de importar correctamente tu modelo de Usuario
exports.iniciarSesion = async function (req, res) {
  const { correo, contraseña } = req.body;

  try {
    // Buscar el empleado por el correo proporcionado
    const cliente = await Cliente.findOne({ correo });

    // Verificar si el empleado existe y si la contraseña es válida
    if (cliente) {
      const passwordMatch = await bcrypt.compare(contraseña, cliente.contraseña);
      if (passwordMatch) {
        // Aquí podrías realizar acciones adicionales, como generar un token de autenticación, etc.
        // Devolver una respuesta con un código de éxito y los datos del empleado
        return res.status(200).json({ success: true, cliente });
      }
    }

    // Si el empleado no existe o las credenciales son incorrectas, devolver una respuesta con un código de error
    return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
  } catch (error) {
    // Manejar errores en caso de que haya un problema con la base de datos u otros errores inesperados
    return res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
};