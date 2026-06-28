<script setup>
import { ref } from "vue";
import { registrar } from "../services/authService";

const emit = defineEmits(["ir-login"]);

const nombre = ref("");
const correo = ref("");
const password = ref("");
const confirmarPassword = ref("");

const error = ref("");
const mensaje = ref("");

const registrarUsuario = async () => {
  error.value = "";
  mensaje.value = "";

  if (password.value !== confirmarPassword.value) {
    error.value = "Las contraseñas no coinciden.";
    return;
  }

  try {
    await registrar({
      nombre: nombre.value,
      correo: correo.value,
      password: password.value
    });

    mensaje.value = "Usuario registrado correctamente.";

    setTimeout(() => {
      emit("ir-login");
    }, 1200);
  } catch (err) {
    error.value = "No se pudo registrar el usuario.";
  }
};
</script>

<template>
  <main class="auth-page">
    <section class="auth-card">
      <h1>Crear cuenta</h1>
      <p>Regístrate para acceder al sistema CRUD.</p>

      <form class="auth-form" @submit.prevent="registrarUsuario">
        <input
          v-model="nombre"
          placeholder="Nombre"
          required
        />

        <input
          v-model="correo"
          type="email"
          placeholder="Correo"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
          required
        />

        <input
          v-model="confirmarPassword"
          type="password"
          placeholder="Confirmar contraseña"
          required
        />

        <button type="submit">
          Registrarse
        </button>
      </form>

      <p v-if="error" class="auth-error">
        {{ error }}
      </p>

      <p v-if="mensaje" class="auth-success">
        {{ mensaje }}
      </p>

      <button class="auth-link" @click="emit('ir-login')">
        Ya tengo cuenta
      </button>
    </section>
  </main>
</template>