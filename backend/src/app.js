import express from "express";
import cors from "cors";

import { conectar } from "./db/db.js";
import { router as clienteRouter } from "./routes/cliente.router.js";
import { router as authRouter } from "./routes/auth.router.js";
import { verificarToken } from "./middleware/auth.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

conectar();

app.use("/auth", authRouter);

// CRUD protegido con JWT
app.use("/clientes", verificarToken, clienteRouter);

app.listen(5000, () => {
  console.log("Servidor ejecutándose en http://localhost:5000");
});