import {
    getContactos as obtenerClientesDB,
    getContactoById as obtenerClienteDB,
    crearContacto as crearClienteDB,
    actualizarContacto as actualizarClienteDB,
    eliminarContacto as eliminarClienteDB
} from "../models/cliente.model.js";

async function obtenerClientes(req, res) {
    try {
        const clientes = await obtenerClientesDB();

        res.json(clientes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener clientes" });
    }
}

async function obtenerCliente(req, res) {
    try {
        const id = req.params.id;

        const cliente = await obtenerClienteDB(id);

        if (!cliente) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json(cliente);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener cliente" });
    }
}

async function crearCliente(req, res) {
    try {
        const datosCliente = req.body;

        const nuevoCliente = await crearClienteDB(datosCliente);

        res.status(201).json({
            mensaje: "Cliente creado correctamente",
            cliente: nuevoCliente
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al crear cliente" });
    }
}

async function actualizarCliente(req, res) {
    try {
        const id = req.params.id;
        const datosCliente = req.body;

        const clienteActualizado = await actualizarClienteDB(id, datosCliente);

        res.json({
            mensaje: "Cliente actualizado correctamente",
            cliente: clienteActualizado
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al actualizar cliente" });
    }
}

async function eliminarCliente(req, res) {
    try {
        const id = req.params.id;

        await eliminarClienteDB(id);

        res.json({
            mensaje: "Cliente eliminado correctamente"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al eliminar cliente" });
    }
}

export {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
};