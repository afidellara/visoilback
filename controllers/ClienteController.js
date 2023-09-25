const bcrypt = require('bcrypt');
const Cliente = require('../models/Cliente'); // Importa el modelo de Cliente

// Controlador para registrar un nuevo cliente
exports.registrarCliente = async (req, res) => {
    try {
        // Extrae los datos del cliente del cuerpo de la solicitud
        const {
            cedula,
            tipoDocumento,
            nombre,
            apellido,
            genero,
            fechaNacimiento,
            correo,
            telefono,
            direccion,
            estadoCliente,
            fotoPerfil,
            ciudad,
            barrio,
            contraseña
        } = req.body;

        const hashContraseña = await bcrypt.hash(contraseña, 10);

        // Crea una instancia del modelo Cliente con los datos recibidos
        const nuevoCliente = new Cliente({
            cedula,
            tipoDocumento,
            nombre,
            apellido,
            genero,
            fechaNacimiento,
            correo,
            telefono,
            direccion,
            estadoCliente,
            fotoPerfil,
            ciudad,
            barrio,
            contraseña: hashContraseña
        });

        // Guarda el nuevo cliente en la base de datos
        await nuevoCliente.save();

        res.status(201).json({ mensaje: 'Cliente registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar el cliente:', error);
        res.status(500).json({ error: 'Error al registrar el cliente' });
    }
};