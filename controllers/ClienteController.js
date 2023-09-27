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

// Controlador para consultar un cliente por su ID
exports.consultarClientes = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);         // buscar todos los productos en la base de datos
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);          // Responde con la lista de productos en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente' });         //mensaje error
    }
};

// Controlador para obtener un cliente por su ID
exports.consultarClientePorID = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el cliente' });
    }
};



