<script setup>
import { ref } from "vue";
import { login } from "../services/authService";

const emit = defineEmits(["login-correcto", "ir-registro"]);

const correo = ref("");
const password = ref("");
const error = ref("");

const iniciarSesion = async () => {
  try {
    error.value = "";

    const respuesta = await login({
      correo: correo.value,
      password: password.value
    });

    localStorage.setItem("token", respuesta.token);
    emit("login-correcto");
  } catch (err) {
    error.value = "Correo o contraseña incorrectos.";
  }
};
</script>

<template>
  <main class="auth-page">
    <section class="auth-card">
      <h1>Iniciar Sesión</h1>
      <p>Accede al sistema CRUD de clientes.</p>

      <form class="auth-form" @submit.prevent="iniciarSesion">
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

        <button type="submit">
          Entrar
        </button>
      </form>

      <p v-if="error" class="auth-error">
        {{ error }}
      </p>

      <button class="auth-link" @click="emit('ir-registro')">
        Crear cuenta
      </button>
    </section>
  </main>
</template>