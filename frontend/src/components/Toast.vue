<script setup>
import {
  CheckCircleIcon,
  PencilSquareIcon,
  TrashIcon,
  ExclamationCircleIcon
} from "@heroicons/vue/24/outline";

const props = defineProps({
  mostrar: Boolean,
  mensaje: String,
  tipo: {
    type: String,
    default: "agregado"
  }
});

const iconos = {
  agregado: CheckCircleIcon,
  actualizado: PencilSquareIcon,
  eliminado: TrashIcon,
  error: ExclamationCircleIcon
};
</script>

<template>
  <Transition name="toast">
    <div v-if="mostrar" class="toast" :class="tipo">
      <component :is="iconos[tipo] || iconos.agregado" class="icono-toast" />
      <span>{{ mensaje }}</span>
    </div>
  </Transition>
</template>
