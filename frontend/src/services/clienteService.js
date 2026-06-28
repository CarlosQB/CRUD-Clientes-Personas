import axios from "axios";

const API_URL = "http://localhost:5000/clientes";

const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export const obtenerClientes = async () => {
  const respuesta = await axios.get(API_URL, getAuthHeaders());
  return respuesta.data;
};

export const crearCliente = async (cliente) => {
  const respuesta = await axios.post(API_URL, cliente, getAuthHeaders());
  return respuesta.data;
};

export const actualizarCliente = async (id, cliente) => {
  const respuesta = await axios.put(`${API_URL}/${id}`, cliente, getAuthHeaders());
  return respuesta.data;
};

export const eliminarCliente = async (id) => {
  const respuesta = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
  return respuesta.data;
};