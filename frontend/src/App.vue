<script setup>
import { ref } from "vue";

import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import ClientesView from "./views/ClientesView.vue";

import "./assets/clientes.css";
import "./assets/auth.css";

const token = ref(localStorage.getItem("token"));
const vista = ref("login");

const loginCorrecto = () => {
  token.value = localStorage.getItem("token");
};

const cerrarSesion = () => {
  localStorage.removeItem("token");
  token.value = null;
  vista.value = "login";
};
</script>

<template>
  <LoginView
    v-if="!token && vista === 'login'"
    @login-correcto="loginCorrecto"
    @ir-registro="vista = 'registro'"
  />

  <RegisterView
    v-if="!token && vista === 'registro'"
    @ir-login="vista = 'login'"
  />

  <ClientesView
    v-if="token"
    @cerrar-sesion="cerrarSesion"
  />
</template>