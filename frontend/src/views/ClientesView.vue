<script setup>
import { ref, computed, onMounted } from "vue";
import { CircleStackIcon } from "@heroicons/vue/24/outline";

import ClienteForm from "../components/ClienteForm.vue";
import ClienteTable from "../components/ClienteTable.vue";
import Toast from "../components/Toast.vue";

import {
  obtenerClientes,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} from "../services/clienteService";

const emit = defineEmits(["cerrar-sesion"]);

const clientes = ref([]);
const busqueda = ref("");
const cargando = ref(false);

const editando = ref(false);
const clienteEditandoId = ref(null);

const nuevoCliente = ref({
  nombres: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  domicilio: "",
  correo: ""
});

const toast = ref({
  mostrar: false,
  mensaje: "",
  tipo: "agregado"
});

let toastTimer = null;

const clientesFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase();

  if (!texto) return clientes.value;

  return clientes.value.filter((cliente) =>
    cliente.nombres.toLowerCase().includes(texto)
  );
});

const mostrarToast = (mensaje, tipo) => {
  toast.value = {
    mostrar: true,
    mensaje,
    tipo
  };

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.value.mostrar = false;
  }, 2600);
};

const cargarClientes = async () => {
  try {
    cargando.value = true;
    clientes.value = await obtenerClientes();
  } catch (error) {
    mostrarToast("No se pudieron cargar los clientes.", "error");
  } finally {
    cargando.value = false;
  }
};

const guardarCliente = async () => {
  try {
    if (editando.value) {
      await actualizarCliente(clienteEditandoId.value, nuevoCliente.value);
      mostrarToast("Cliente actualizado correctamente.", "actualizado");
    } else {
      await crearCliente(nuevoCliente.value);
      mostrarToast("Cliente agregado correctamente.", "agregado");
    }

    limpiarFormulario();
    await cargarClientes();
  } catch (error) {
    mostrarToast("Ocurrió un error al guardar el cliente.", "error");
  }
};

const eliminarClientePorId = async (id) => {
  const confirmar = confirm("¿Seguro que quieres eliminar este cliente?");
  if (!confirmar) return;

  try {
    await eliminarCliente(id);
    await cargarClientes();
    mostrarToast("Cliente eliminado correctamente.", "eliminado");
  } catch (error) {
    mostrarToast("No se pudo eliminar el cliente.", "error");
  }
};

const cargarClienteParaEditar = (cliente) => {
  editando.value = true;
  clienteEditandoId.value = cliente.id;

  nuevoCliente.value = {
    nombres: cliente.nombres,
    apellidoPaterno: cliente.apellidoPaterno,
    apellidoMaterno: cliente.apellidoMaterno,
    domicilio: cliente.domicilio,
    correo: cliente.correo
  };

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const limpiarFormulario = () => {
  nuevoCliente.value = {
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    domicilio: "",
    correo: ""
  };

  editando.value = false;
  clienteEditandoId.value = null;
};

const cerrarSesion = () => {
  localStorage.removeItem("token");
  emit("cerrar-sesion");
};

onMounted(() => {
  cargarClientes();
});
</script>

<template>
  <main class="page">
    <Toast
      :mostrar="toast.mostrar"
      :mensaje="toast.mensaje"
      :tipo="toast.tipo"
    />

    <header class="header">
      <h1>CRUD de Clientes</h1>

      <button class="btn-logout" @click="cerrarSesion">
        Cerrar sesión
      </button>
    </header>

    <ClienteForm
      :cliente="nuevoCliente"
      :editando="editando"
      @guardar="guardarCliente"
      @limpiar="limpiarFormulario"
    />

    <ClienteTable
      v-model:busqueda="busqueda"
      :clientes="clientesFiltrados"
      :total="clientes.length"
      :cargando="cargando"
      @editar="cargarClienteParaEditar"
      @eliminar="eliminarClientePorId"
    />

    <footer>
      <p class="footer-tech">
        <CircleStackIcon class="icono-footer" />
        CRUD con Vue.js + Express + Sequelize + MySQL
      </p>
      <p>© 2025 - Proyecto CRUD de Clientes</p>
    </footer>
  </main>
</template>