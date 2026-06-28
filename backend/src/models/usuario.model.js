import { Usuario } from "./usuario.schema.js";

async function crearUsuario(usuario) {
  return await Usuario.create(usuario);
}

async function buscarUsuarioPorCorreo(correo) {
  return await Usuario.findOne({
    where: { correo }
  });
}

export {
  crearUsuario,
  buscarUsuarioPorCorreo
};