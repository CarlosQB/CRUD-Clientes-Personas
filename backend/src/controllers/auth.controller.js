import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
  crearUsuario,
  buscarUsuarioPorCorreo
} from "../models/usuario.model.js";

const SECRET_KEY = "mi_clave_secreta";

async function registrar(req, res) {
  try {
    const { nombre, correo, password } = req.body;

    const usuarioExistente = await buscarUsuarioPorCorreo(correo);

    if (usuarioExistente) {
      return res.status(400).json({ error: "El correo ya está registrado" });
    }

    const passwordEncriptado = await bcrypt.hash(password, 10);

    const nuevoUsuario = await crearUsuario({
      nombre,
      correo,
      password: passwordEncriptado
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: nuevoUsuario.id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
}

async function login(req, res) {
  try {
    const { correo, password } = req.body;

    const usuario = await buscarUsuarioPorCorreo(correo);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);

    if (!passwordValido) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({
      mensaje: "Login correcto",
      token
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
}

export { registrar, login };