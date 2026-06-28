import { Cliente } from "./cliente.schema.js";

async function getContactos() {
    return await Cliente.findAll();
}

async function getContactoById(id) {
    return await Cliente.findByPk(id);
}

async function crearContacto(contacto) {
    return await Cliente.create(contacto);
}

async function actualizarContacto(id, contacto) {
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return null;
    }

    await cliente.update(contacto);

    return cliente;
}

async function eliminarContacto(id) {
    const cliente = await Cliente.findByPk(id);

    if (!cliente) {
        return null;
    }

    await cliente.destroy();

    return cliente;
}

export {
    getContactos,
    getContactoById,
    crearContacto,
    actualizarContacto,
    eliminarContacto
};