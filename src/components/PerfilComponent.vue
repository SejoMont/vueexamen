<template>
  <div>
    <h1>Perfil</h1>
    <h2>nombre: {{ perfil.nombre }}</h2>
    <h2>email: {{ perfil.email }}</h2>
    <router-link class="btn btn-outline-info" :to="'/compras/'"
      >Compras</router-link
    >
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "PerfilComponent",
  mounted() {
    service.getPerfil().then((response) => {
      this.perfil = response.data;
    });
  },
  data() {
    return {
      perfil: [],
    };
  },
};
</script>

<style>
</style>