<script setup>
import {
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  TrashIcon
} from "@heroicons/vue/24/outline";
import SearchBar from "./SearchBar.vue";

defineProps({
  clientes: {
    type: Array,
    default: () => []
  },
  busqueda: {
    type: String,
    default: ""
  },
  total: {
    type: Number,
    default: 0
  },
  cargando: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  "editar",
  "eliminar",
  "update:busqueda"
]);
</script>

<template>
  <section class="card">
    <div class="lista-header">
      <h2 class="titulo-card sin-margin">
        <ClipboardDocumentListIcon class="icono-titulo" />
        Lista de Clientes
      </h2>
    </div>

    <SearchBar
      :model-value="busqueda"
      :total="total"
      @update:model-value="emit('update:busqueda', $event)"
    />

    <div v-if="cargando" class="estado-tabla">
      Cargando clientes...
    </div>

    <div v-else class="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombres</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Domicilio</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="cliente in clientes" :key="cliente.id">
            <td>{{ cliente.id }}</td>
            <td>{{ cliente.nombres }}</td>
            <td>{{ cliente.apellidoPaterno }}</td>
            <td>{{ cliente.apellidoMaterno }}</td>
            <td>{{ cliente.domicilio }}</td>
            <td>{{ cliente.correo }}</td>

            <td>
              <div class="acciones">
                <button class="btn-icon editar" @click="emit('editar', cliente)">
                  <PencilSquareIcon class="icono-tabla" />
                </button>

                <button class="btn-icon eliminar" @click="emit('eliminar', cliente.id)">
                  <TrashIcon class="icono-tabla" />
                </button>
              </div>
            </td>
          </tr>

          <tr v-if="clientes.length === 0">
            <td colspan="7" class="vacio">
              No se encontraron clientes
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
