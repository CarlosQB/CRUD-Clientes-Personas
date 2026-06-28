<script setup>
import { MagnifyingGlassIcon, UsersIcon } from "@heroicons/vue/24/outline";

defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  total: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="herramientas-lista">
    <div class="buscador">
      <MagnifyingGlassIcon class="icono-busqueda" />
      <input
        :value="modelValue"
        placeholder="Buscar cliente por nombre..."
        @input="emit('update:modelValue', $event.target.value)"
      />
    </div>

    <div class="contador">
      <UsersIcon class="icono-contador" />
      Clientes registrados: {{ total }}
    </div>
  </div>
</template>
