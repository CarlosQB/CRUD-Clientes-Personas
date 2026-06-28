import axios from "axios";

const API_URL = "http://localhost:5000/auth";

export const login = async (credenciales) => {
  const respuesta = await axios.post(`${API_URL}/login`, credenciales);
  return respuesta.data;
};

export const registrar = async (usuario) => {
  const respuesta = await axios.post(`${API_URL}/register`, usuario);
  return respuesta.data;
};