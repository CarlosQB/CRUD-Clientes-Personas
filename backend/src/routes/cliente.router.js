import express from 'express';
import {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
} from "../controllers/cliente.controller.js";

const router = express.Router();

router.get("/", obtenerClientes);

router.get("/:id", obtenerCliente);

router.post("/", crearCliente);

router.put("/:id", actualizarCliente);

router.delete("/:id", eliminarCliente);

export { router };