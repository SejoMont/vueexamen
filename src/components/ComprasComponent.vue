<template>
  <div>
    <h1>Compras</h1>
    <div v-for="compra of compras" :key="compra">
      <div class="card">
        <div class="card-header">idCubo: {{ compra.idCubo }}</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>idPedido: {{ compra.idPedido }}</p>
            <footer class="blockquote-footer">{{ compra.fechaPedido }}</footer>
          </blockquote>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComprasComponent",
  mounted() {
    service.getCompras().then((response) => {
      this.compras = response.data;
    });
  },
  data() {
    return {
      compras: [],
    };
  },
};
</script>

<style>
</style>