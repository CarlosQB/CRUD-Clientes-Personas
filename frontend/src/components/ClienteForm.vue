<script setup>
import {
  UserPlusIcon,
  PencilSquareIcon,
  FolderPlusIcon,
  ArrowPathIcon
} from "@heroicons/vue/24/outline";

defineProps({
  cliente: {
    type: Object,
    required: true
  },
  editando: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(["guardar", "limpiar"]);
</script>

<template>
  <section class="card">
    <h2 class="titulo-card">
      <PencilSquareIcon v-if="editando" class="icono-titulo" />
      <UserPlusIcon v-else class="icono-titulo" />
      {{ editando ? "Editar Cliente" : "Agregar Cliente" }}
    </h2>

    <form class="formulario" @submit.prevent="emit('guardar')">
      <div class="campo">
        <label>Nombres</label>
        <input v-model="cliente.nombres" placeholder="Ej: Juan Carlos" required />
      </div>

      <div class="campo">
        <label>Apellido Paterno</label>
        <input v-model="cliente.apellidoPaterno" placeholder="Ej: Pérez" required />
      </div>

      <div class="campo">
        <label>Apellido Materno</label>
        <input v-model="cliente.apellidoMaterno" placeholder="Ej: López" required />
      </div>

      <div class="campo">
        <label>Domicilio</label>
        <input v-model="cliente.domicilio" placeholder="Ej: Av. Siempre Viva 123" required />
      </div>

      <div class="campo">
        <label>Correo</label>
        <input v-model="cliente.correo" type="email" placeholder="Ej: correo@email.com" required />
      </div>

      <div class="botones">
        <button type="submit" class="btn guardar">
          <FolderPlusIcon class="icono-btn" />
          {{ editando ? "Actualizar" : "Guardar" }}
        </button>

        <button type="button" class="btn limpiar" @click="emit('limpiar')">
          <ArrowPathIcon class="icono-btn" />
          Limpiar
        </button>
      </div>
    </form>
  </section>
</template>
