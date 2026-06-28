import jwt from "jsonwebtoken";

const SECRET_KEY = "mi_clave_secreta";

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token inválido" });
  }

  try {
    const usuario = jwt.verify(token, SECRET_KEY);
    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(403).json({ error: "Token inválido o expirado" });
  }
}

export { verificarToken };